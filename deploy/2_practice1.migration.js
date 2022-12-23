const practice1 = artifacts.require("Practice1");

module.exports = async (deployer) => {
  await deployer.deploy(practice1);
};
