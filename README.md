# NFT Collection Deployment and Transfer to Polygon Mumbai

This project demonstrates how to deploy an NFT collection on the Ethereum testnet and transfer the NFTs to the Polygon Mumbai network using the FxPortal Bridge.

## Prerequisites

- Node.js (v14 or later)
- Hardhat (v2.0.7 or later)
- Ethereum and Polygon (Matic) Wallets

## Installation

1. Clone this repository.
2. Navigate to the project directory.

```bash
git clone https://github.com/your-username/nft-migration-project.git
cd nft-migration-project
```

3. Install project dependencies.

```bash
npm install
```

## Deploy NFT Collection

1. Update the `scripts/deploy.js` script with your desired contract name and symbol.
2. Run the deployment script.

```bash
npx hardhat run scripts/deploy.js --network goerli
```

3. Note down the deployed NFT contract address.

## Transfer NFTs to Polygon Mumbai

1. Update the `scripts/transferNFTs.js` script with the actual NFT contract address and your Polygon Mumbai address.
2. Run the transfer script.

```bash
npx hardhat run scripts/transferNFTs.js --network goerli
```

## Notes

- Replace `"NFT_CONTRACT_ADDRESS"` with the actual NFT contract address obtained during deployment.
- Replace `"YOUR_POLYGON_MUMBAI_ADDRESS"` with your Polygon Mumbai address.
- Ensure you have the required amount of test Ether on Goerli and Polygon Mumbai networks for deployment and transactions.

## Disclaimer

This project is for educational purposes only. Use it as a reference and adapt the code according to your project's requirements.

## License

This project is licensed under the [MIT License](LICENSE).
