import web3Provider from "./web3";
import CampaignFactoryArtifact from "./build/contracts/CampaignFactory.json";
import TruffleContract from "@truffle/contract";

const CampaignFactoryContract = TruffleContract(CampaignFactoryArtifact);
CampaignFactoryContract.setProvider(web3Provider);

export default () => {
  return CampaignFactoryContract.deployed();
  // console.log(instance);
};

// const instance = new web3.eth.Contract(
//   JSON.parse(CampaignFactory.interface),
//   "0xB07Ff2bB7a4905FCCB65305F8F877fE5F0b44d8b"
// );

// export default instance;
