import hardhatToolboxMochaEthers from "@nomicfoundation/hardhat-toolbox-mocha-ethers";

import hardhatGobind from "@solarity/hardhat-gobind";
import hardhatMarkup from "@solarity/hardhat-markup";
import hardhatMigrate from "@solarity/hardhat-migrate";

import { configVariable, defineConfig } from "hardhat/config";

import hardhatContractSizer from "@solidstate/hardhat-contract-sizer";

export default defineConfig({
  plugins: [hardhatToolboxMochaEthers, hardhatGobind, hardhatMarkup, hardhatMigrate, hardhatContractSizer],
  paths: {
    sources: {
      solidity: ["contracts"],
    },
  },
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris",
    },
    npmFilesToBuild: [],
  },
  networks: {
    default: {
      type: "edr-simulated",
      chainType: "l1",
      initialDate: "1970-01-01T00:00:00Z",
    },
    localhost: {
      type: "http",
      chainType: "l1",
      url: "http://127.0.0.1:8545",
      gasMultiplier: 1.2,
    },
    ethereumFork: {
      type: "edr-simulated",
      chainType: "l1",
      forking: {
        url: configVariable("INFURA_KEY", "https://mainnet.infura.io/v3/{variable}"),
        blockNumber: 17000000,
      },
    },
    sepolia: {
      type: "http",
      chainType: "l1",
      url: configVariable("INFURA_KEY", "https://sepolia.infura.io/v3/{variable}"),
      accounts: [configVariable("PRIVATE_KEY")],
      gasMultiplier: 1.2,
    },
    ethereum: {
      type: "http",
      chainType: "l1",
      url: configVariable("INFURA_KEY", "https://mainnet.infura.io/v3/{variable}"),
      accounts: [configVariable("PRIVATE_KEY")],
      gasMultiplier: 1.2,
    },
  },
  verify: {
    blockscout: {
      enabled: false,
    },
    etherscan: {
      apiKey: configVariable("ETHERSCAN_KEY"),
    },
    sourcify: {
      enabled: false,
    },
  },
  migrate: {
    paths: {
      pathToMigrations: "./deploy/",
    },
  },
  test: {
    mocha: {
      timeout: 1_000_000,
    },
  },
  coverage: {
    skipFiles: [],
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    flat: true,
    strict: false,
    unit: "KiB",
  },
  typechain: {
    outDir: "generated-types/ethers",
    alwaysGenerateOverloads: true,
    dontOverrideCompile: false,
    discriminateTypes: true,
    tsNocheck: false,
  },
});
