import { Deployer, Logger } from "@dlsl/hardhat-migrate";
import { artifacts } from "hardhat";

const ERC20Mock = artifacts.require("ERC20Mock");

export = async (deployer: Deployer, logger: Logger) => {
  const erc20 = await deployer.deploy(ERC20Mock, "Mock", "Mock", 18);

  logger.logContracts(["ERC20Mock", erc20.address]);
};
