import { Deployer, Reporter } from "@solarity/hardhat-migrate";
import { artifacts } from "hardhat";

const ERC20Mock = artifacts.require("ERC20Mock");

export = async (deployer: Deployer) => {
  const erc20 = await deployer.deploy(ERC20Mock, ["Mock", "Mock", 18]);

  Reporter.reportContracts(["ERC20Mock", erc20.address]);
};
