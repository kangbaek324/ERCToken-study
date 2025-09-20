import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"

const TokenMoudle = buildModule("TokenModule", (m) => {
    const token = m.contract("Erc20");
    return { token };
});

export default TokenMoudle;