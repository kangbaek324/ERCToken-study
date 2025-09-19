import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"
import * as dotenv from "dotenv";

dotenv.config({ quiet: true });

const TokenMoudle = buildModule("TokenModule", (m) => {
    const token = m.contract("Erc1155");

    // NFT MINT
    m.call(token, "mint", [process.env.PUBLIC_KEY!, 0, 2, ""], { id: "kunai_mint" });
    m.call(token, "mint", [process.env.PUBLIC_KEY!, 1, 2, ""], { id: "karambit_mint" });

    return { token };
});

export default TokenMoudle;

// npx hardhat ignition deploy ./ignition/modules/erc1155.ts