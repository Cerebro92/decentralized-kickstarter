require("dotenv").config();

module.exports = {
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { topLevelAwait: true };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config;
  },
  env: {
    ETH_NODE_URL: process.env.ETH_NODE_URL,
  },
};
