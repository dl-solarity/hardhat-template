const { assert } = require("chai");

const Practice1 = artifacts.require("Practice1");

const { toBN, hex2a } = require("../scripts/utils/utils");

const web3 = require("web3");

describe("Practice1", () => {
  let practice1;

  beforeEach("setup", async () => {
    practice1 = await Practice1.new();
  });

  it("getInt256", async () => {
    assert.equal(toBN(await practice1.getInt256()).toString(16), "ffffffffffffffffffff");
  });

  it("getUint256", async () => {
    assert.equal(await practice1.getUint256(), 1);
  });

  it("getIint8", async () => {
    assert.equal(await practice1.getIint8(), 120);
  });

  it("getUint8", async () => {
    assert.equal(await practice1.getUint8(), 255);
  });

  it("getBool", async () => {
    assert.equal(await practice1.getBool(), false);
  });

  it("getBytes32", async () => {
    const res = await practice1.getBytes32();

    const str = web3.utils.hexToUtf8(res);

    assert.equal(str, "some bytes");
  });

  it("getArrayUint5", async () => {
    const arrayLength = 5;

    const array = await practice1.getArrayUint5();

    assert.lengthOf(array, arrayLength, `array must be ${arrayLength}`);
  });

  it("getArrayUint", async () => {
    const arrayLength = 10;

    const array = await practice1.getArrayUint();

    assert.lengthOf(array, arrayLength, `array must be ${arrayLength}`);
  });

  it("getString", async () => {
    const str = await practice1.getString();

    assert.equal(str, "Hello, world!");
  });

  it("getBigUint", async () => {
    const lowerLimit = toBN(100_000);
    const result = await practice1.getBigUint();

    assert.isTrue(toBN(result).isGreaterThan(lowerLimit), `must be greater ${lowerLimit}`);
  });
});
