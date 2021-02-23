const CandyToken = artifacts.require("CandyToken");
const CatchupBar = artifacts.require("CatchupBar");
const MasterChef = artifacts.require("MasterChef");
let admin = "0xa2D33AdFf295180f50716BcC21C2794a8b986Dd3"

module.exports = function(deployer) {
  // 1st deployment
  deployer.deploy(CandyToken).then(function() {
    return deployer.deploy(CatchupBar, CandyToken.address).then(function() {
      return deployer.deploy(MasterChef, CandyToken.address, CatchupBar.address, admin, "1000000000000000000", 4021488)
    })
  })
};