# Hardhat template

Template Hardhat repository for ad-hoc smart contracts development.

## How to use

The template works out of the box. To clean up the repo, you may need to delete the mock contracts, tests and migration files.

### Compilation

To compile the contracts, use the next script:

```bash
npm run build
```

### Test

To run the tests, execute the following command:

```bash
npm run test
```

Or to see the coverage, run:

```bash
npm run coverage
```

### Local deployment

To deploy the contracts locally, run the following commands (in the different terminals):

```bash
npm run private-network
npm run deploy-localhost
```

### Bindings

The command to generate the bindings is as follows:

```bash
npm run generate-types
```

> See the full list of available commands in the `package.json` file.

## Integrated plugins

- [`@nomicfoundation/hardhat-toolbox-mocha-ethers`](https://www.npmjs.com/package/@nomicfoundation/hardhat-toolbox-mocha-ethers)
- [`@solarity/hardhat-migrate`](https://www.npmjs.com/package/@solarity/hardhat-migrate), [`@solarity/hardhat-markup`](https://www.npmjs.com/package/@solarity/hardhat-markup), [`@solarity/hardhat-gobind`](https://www.npmjs.com/package/@solarity/hardhat-gobind)

## Other niceties

- The template comes with presetup `prettier`, `slippy` and `eslint` that lint the project via `husky` before compilation hook.
- The `.env.example` file is provided to check what is required as ENVs
- Preinstalled `@openzeppelin/contracts` and `@solarity/solidity-lib`

> Install the `ESLint` extension in VSCode to enable `ESLint`.
