import "dotenv/config"

import { HardhatUserConfig } from "hardhat/config"
import "hardhat-deploy"
import "hardhat-deploy-ethers"
import "@nomiclabs/hardhat-etherscan"

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [""]

const config: HardhatUserConfig = {
    solidity: {
        version: "0.6.6",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    namedAccounts: {
        deployer: process.env.DEPLOYER || ""
    },
    etherscan: {
        apiKey: {
            sepolia: process.env.ETHERSCAN_API || ""
        }
    },
    networks: {
        sepolia: {
            url: 'https://rpc.sepolia.org',
            chainId: 11155111,
            accounts
        }
    }
}

export default config