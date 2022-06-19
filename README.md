
# decentralized-kickstarter
A Kickstarter clone built with Next.js and Solidity on Ethereum blockchain

Inspired from [Kickstarter](https://www.kickstarter.com/), decentralized-kickstarter is an attempt to create a global crowdfunding platform on ethereum blockchain to enforce transparency.
This platform allows people to view and participate in ongoing campaigns. Also, it enables them to create new campaigns.


## Features

- List ongoing campaigns
- Create new campaigns and place requests for contributors to review.
- Contributors participate in ongoing campaigns paying minimum contribution amount.
- Campaign Manager create new request in campaign to procure new goods/services.
- Contributors approve/reject requests.
- Campaign manager finalize request on receving enough approvals.
- Contract transfers amount to recepient account.


## Built With

- [Solidity](https://soliditylang.org/)
- [Next.js](https://nextjs.org/)
- [Truffle](https://trufflesuite.com/truffle/)
- [Ganache](https://trufflesuite.com/ganache/)
- [Alchemy](https://www.alchemy.com/)
- [Semantic UI](https://semantic-ui.com/)
- [web3.js](https://web3js.readthedocs.io)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ETH_NODE_URL`

`MNEMONIC_PHRASE`


## Run Locally

1. Clone the project

```bash
  git clone git@github.com:Cerebro92/decentralized-kickstarter.git
```


2. Install Truffle globally

```bsh
  npm install -g truffle
```

3. Fire up local ethereum blockchain, [Ganache](https://trufflesuite.com/docs/ganache/) and deploy contracts.

```bash
  cd ethereum
  truffle migrate
  truffle migrate --network rinkeby  # deploys on rinkeby network.
```


4. Install dependencies in project root folder

```bash
  npm install
```

5. Run local development server

```bash
  npm run dev
```

6. Visit http://127.0.0.1:3000
# Acknowledgments
Inspiration
- awesome course on Ethereum and solidity by [Stephen Grider](https://www.linkedin.com/in/stephengrider/)
