const hre = require("hardhat");

async function main() {
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const roboPunksNFT = await RoboPunksNFT.deploy();

  console.log("RoboPunksNFT deployed to:", roboPunksNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
