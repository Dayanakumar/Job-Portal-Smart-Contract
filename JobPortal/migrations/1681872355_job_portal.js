const jobportal = artifacts.require("JobPortal");
module.exports = function (deployer) {
  deployer.deploy(jobportal);
};
