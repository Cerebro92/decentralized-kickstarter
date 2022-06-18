import React, { Component, useState } from "react";
import { withRouter } from "next/router";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { useRouter } from "next/router";

function CampaignNew(props) {
  const router = useRouter();

  const [state, setState] = useState({
    minimumContribution: "",
    errorMessage: "",
    loading: false,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setState({ loading: true, errorMessage: "" });

    // console.log(web3);
    // console.log(web3.selectedAddress);

    try {
      // const accounts = await web3.eth.getAccounts();
      const factoryInstance = await factory();

      console.log(factoryInstance.address);
      console.log(state.minimumContribution);
      console.log(web3.selectedAddress);

      await factoryInstance.createCampaign(state.minimumContribution, {
        from: web3.selectedAddress,
      });
      // .send({
      //   // from: accounts[0],
      //   from: web3.selectedAddress,
      // });

      router.push("/");
    } catch (err) {
      setState({ errorMessage: err.message });
    }
    setState({ loading: false });
  };

  return (
    <Layout>
      <h3>Create Campaign</h3>
      <Form onSubmit={onSubmit} error={!!state.errorMessage}>
        <Form.Field>
          <label>Minimum Contribution</label>
          <Input
            label="wei"
            labelPosition="right"
            value={state.minimumContribution}
            onChange={(event) =>
              setState({ minimumContribution: event.target.value })
            }
          />
        </Form.Field>
        <Message error header="Oops!" content={state.errorMessage} />
        <Button loading={state.loading} primary>
          Create!
        </Button>
      </Form>
    </Layout>
  );
}

export default withRouter(CampaignNew);
