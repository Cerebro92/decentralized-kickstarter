import React, { Component } from "react";
import { withRouter } from "next/router";
import { Table, Button } from "semantic-ui-react";
import web3Provider, { web3 } from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

class RequestRow extends Component {
  onApprove = async () => {
    const { router, address, id } = this.props;
    const campaign = await Campaign.at(address);
    await campaign.approveRequest(id, {
      from: web3Provider.selectedAddress,
    });
    router.push(`/campaigns/${address}/requests`);
  };

  onFinalize = async () => {
    const { router, address, id } = this.props;
    const campaign = await Campaign.at(address);
    await campaign.finalizeRequest(id, {
      from: web3Provider.selectedAddress,
    });
    router.push(`/campaigns/${address}/requests`);
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;

    return (
      <Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}
      >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>
          {request.approvalCount.toString(10)}/{approversCount.toString(10)}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}

export default withRouter(RequestRow);
