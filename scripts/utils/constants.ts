import { BigNumber } from "ethers";

export const ZERO_ADDR = "0x0000000000000000000000000000000000000000";
export const ETHER_ADDR = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

export const SECONDS_IN_DAY = 86400;
export const SECONDS_IN_MONTH = SECONDS_IN_DAY * 30;

export const PRECISION = BigNumber.from(10).pow(25);
export const PERCENTAGE_100 = PRECISION.mul(100);
export const DECIMAL = BigNumber.from(10).pow(18);
