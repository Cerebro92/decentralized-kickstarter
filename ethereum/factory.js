import TruffleContract from "@truffle/contract";
import web3Provider from "./web3";
import CampaignFactoryArtifact from "./build/contracts/CampaignFactory.json";

const CampaignFactoryContract = TruffleContract(CampaignFactoryArtifact);
CampaignFactoryContract.setProvider(web3Provider);

export default CampaignFactoryContract.deployed;
