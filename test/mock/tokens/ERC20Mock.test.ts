import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ERC20Mock } from "../../../generated-types/ethers";
import { ethers } from "hardhat";
import { Reverter } from "../../helpers/reverter";
import { wei } from "../../../scripts/utils/utils";

describe("ERC20Mock", () => {
  let OWNER: SignerWithAddress;
  let SECOND: SignerWithAddress;

  let erc20: ERC20Mock;

  let reverter = new Reverter();

  before(async () => {
    [OWNER, SECOND] = await ethers.getSigners();

    const ERC20Mock = await ethers.getContractFactory("ERC20Mock");
    erc20 = await ERC20Mock.deploy("Mock", "Mock", 18);

    await reverter.snapshot();
  });

  afterEach(reverter.revert);

  describe("#constructor", () => {
    it("should set parameters correctly", async () => {
      expect(await erc20.name()).to.eq("Mock");
      expect(await erc20.symbol()).to.eq("Mock");
      expect(await erc20.decimals()).to.eq(18);
    });
  });

  describe("#mint", () => {
    it("should mint correctly", async () => {
      expect(await erc20.balanceOf(SECOND.address)).to.eq(0);

      const tx = erc20.mint(SECOND.address, wei(1000));

      await expect(tx).to.changeTokenBalance(erc20, SECOND, wei(1000));
    });
  });

  describe("#burn", () => {
    it("should burn correctly", async () => {
      expect(await erc20.balanceOf(SECOND.address)).to.eq(0);

      await erc20.mint(SECOND.address, wei(1000));

      const tx = erc20.burn(SECOND.address, wei("0.5"));

      await expect(tx).to.changeTokenBalance(erc20, SECOND, wei("-0.5"));
    });
  });
});
