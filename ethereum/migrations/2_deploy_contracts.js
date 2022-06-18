const CampaignFactory = artifacts.require("CampaignFactory");
// const Campaign = artifacts.require("Campaign");


module.exports = function (deployer) {
//   deployer.deploy(Campaign);
  deployer.deploy(CampaignFactory);
  // deployer.deploy(Campaign);
};
