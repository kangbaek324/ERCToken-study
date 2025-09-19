import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

const TokenMoudle = buildModule("TokenModule", (m) => {
    const token = m.contract("Erc721");

    // NFT MINT
    m.call(token, "mint", [process.env.PUBLIC_KEY!, 0]);

    return { token };
});

export default TokenMoudle;