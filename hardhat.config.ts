import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-truffle5";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";
import "@solarity/hardhat-migrate";
import "@solarity/hardhat-gobind";
import "@solarity/hardhat-markup";
import "@typechain/hardhat";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "tsconfig-paths/register";

import { HardhatUserConfig } from "hardhat/config";

import * as dotenv from "dotenv";
dotenv.config();

function privateKey() {
  return process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
}

function typechainTarget() {
  const target = process.env.TYPECHAIN_TARGET;

  return target === "" || target === undefined ? "ethers-v5" : target;
}

function forceTypechain() {
  return process.env.TYPECHAIN_FORCE !== "false";
}

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      initialDate: "1970-01-01T00:00:00Z",
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      initialDate: "1970-01-01T00:00:00Z",
      gasMultiplier: 1.2,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: privateKey(),
      gasMultiplier: 1.2,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: privateKey(),
      gasMultiplier: 1.2,
    },
    chapel: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      accounts: privateKey(),
      gasMultiplier: 1.2,
      timeout: 60000,
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/`,
      accounts: privateKey(),
      gasMultiplier: 1.2,
    },
    fuji: {
      url: `https://avalanche-fuji.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: privateKey(),
      gasMultiplier: 1.2,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      accounts: privateKey(),
      gasMultiplier: 1.2,
    },
    ethereum: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: privateKey(),
      gasMultiplier: 1.2,
    },
    polygon: {
      url: `https://matic-mainnet.chainstacklabs.com`,
      accounts: privateKey(),
      gasMultiplier: 1.2,
    },
    avalanche: {
      url: `https://api.avax.network/ext/bc/C/rpc`,
      accounts: privateKey(),
      gasMultiplier: 1.2,
      timeout: 60000,
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris",
    },
  },
  etherscan: {
    apiKey: {
      goerli: `${process.env.ETHERSCAN_KEY}`,
      sepolia: `${process.env.ETHERSCAN_KEY}`,
      mainnet: `${process.env.ETHERSCAN_KEY}`,
      bscTestnet: `${process.env.BSCSCAN_KEY}`,
      bsc: `${process.env.BSCSCAN_KEY}`,
      polygonMumbai: `${process.env.POLYGONSCAN_KEY}`,
      polygon: `${process.env.POLYGONSCAN_KEY}`,
      avalancheFujiTestnet: `${process.env.AVALANCHE_KEY}`,
      avalanche: `${process.env.AVALANCHE_KEY}`,
    },
  },
  migrate: {
    pathToMigrations: "./deploy/",
  },
  mocha: {
    timeout: 1000000,
  },
  contractSizer: {
    alphaSort: false,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: false,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 50,
    enabled: false,
    coinmarketcap: `${process.env.COINMARKETCAP_KEY}`,
  },
  typechain: {
    outDir: `generated-types/${typechainTarget().split("-")[0]}`,
    target: typechainTarget(),
    alwaysGenerateOverloads: true,
    discriminateTypes: true,
    dontOverrideCompile: !forceTypechain(),
  },
};

export default config;
