import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config({ quiet: true });

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    amoy: {
      url: process.env.AMOY_URL,
      accounts: [process.env.PRIVATE_KEY!],
    }
  }
};

export default config;
