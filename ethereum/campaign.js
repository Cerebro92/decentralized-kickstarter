// import web3 from "./web3";
// import Campaign from "./build/Campaign.json";

// const campaign = (address) => {
//   return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
// };
// export default campaign;

// import web3Provider from "./web3";
// import CampaignFactoryArtifact from "./build/contracts/CampaignFactory.json";
// import TruffleContract from "@truffle/contract";

// const CampaignFactoryContract = TruffleContract(CampaignFactoryArtifact);
// CampaignFactoryContract.setProvider(web3Provider);

// export default () => {
//   return CampaignFactoryContract.deployed();
//   // console.log(instance);
// };

import web3Provider from "./web3";
import CampaignArtifact from "./build/contracts/Campaign.json";
import TruffleContract from "@truffle/contract";

const CampaignContract = TruffleContract(CampaignArtifact);
CampaignContract.setProvider(web3Provider);

export default CampaignContract;
