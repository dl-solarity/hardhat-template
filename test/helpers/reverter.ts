import hre from "hardhat";

export class Reverter {
  private snapshotId: string | undefined;

  revert = async () => {
    const { provider } = await hre.network.getOrCreate();
    await provider.request({ method: "evm_revert", params: [this.snapshotId] });
    await this.snapshot();
  };

  snapshot = async () => {
    const { provider } = await hre.network.getOrCreate();
    this.snapshotId = (await provider.request({
      method: "evm_snapshot",
      params: [],
    })) as string;
  };
}
