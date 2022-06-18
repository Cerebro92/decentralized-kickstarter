import React, { Component } from "react";
import { withRouter } from "next/router";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3Provider, { web3 } from "../ethereum/web3";

class ContributeForm extends Component {
  state = {
    value: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const { router } = this.props;
    const campaign = await Campaign.at(this.props.address);
    this.setState({ loading: true, errorMessage: "" });

    try {
      await campaign.contribute({
        from: web3Provider.selectedAddress,
        value: web3.utils.toWei(this.state.value, "ether"),
      });
      router.push(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default withRouter(ContributeForm);
