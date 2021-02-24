const CandyToken = artifacts.require("CandyToken");

module.exports = function(deployer) {
  // candy redeployment
  deployer.deploy(CandyToken)
};