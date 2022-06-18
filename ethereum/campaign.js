import TruffleContract from "@truffle/contract";
import web3Provider from "./web3";
import CampaignArtifact from "./build/contracts/Campaign.json";

const CampaignContract = TruffleContract(CampaignArtifact);
CampaignContract.setProvider(web3Provider);

export default CampaignContract;
