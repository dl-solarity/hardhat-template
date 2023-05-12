import { ethers } from "hardhat";
import { BigNumber } from "bignumber.js";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

export function toBN(value: string | number | BigNumber | bigint) {
  if (typeof value == "bigint") {
    value = value.toString();
  }

  return new BigNumber(value);
}

export function wei(value: string | number | bigint, decimal: number = 18): bigint {
  if (typeof value == "number" || typeof value == "bigint") {
    value = value.toString();
  }

  return ethers.utils.parseUnits(value as string, decimal).toBigInt();
}

export function weiBTC(value: string | number | bigint): bigint {
  return wei(value, 8);
}

export function weiUSDT(value: string | number | bigint): bigint {
  return wei(value, 6);
}

export function fromWei(value: string | number | bigint, decimal: number = 18): string {
  return toBN(value).div(toBN(10).pow(decimal)).toString();
}

export async function accounts(index: number): Promise<SignerWithAddress> {
  return (await ethers.getSigners())[index];
}
