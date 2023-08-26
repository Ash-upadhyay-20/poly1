// scripts/deploy.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const NFTCollection = await ethers.getContractFactory("NFTCollection");
  const nftCollection = await upgrades.deployProxy(NFTCollection, ["My NFT Collection", "MNC"]);
  await nftCollection.deployed();

  console.log("NFT Collection deployed to:", nftCollection.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });















// async function main() {
//   const MyNFT = await ethers.getContractFactory("MyNFT");

//   // Start deployment, returning a promise that resolves to a contract object
//   const myNFT = await MyNFT.deploy();
//   console.log("Contract deployed to address:", myNFT.address);
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

//   //Contract deployed to address: 0xE9181dbAC9B0D9380d3B362f1f49074Bd67Aad55
