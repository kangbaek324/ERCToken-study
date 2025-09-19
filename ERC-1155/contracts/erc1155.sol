// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract Erc1155 is ERC1155 {
    constructor() ERC1155(
        "https://raw.githubusercontent.com/kangbaek324/ERCToken-study/main/ERC-721/metadata/{id}.json"
    ) {}

    function mint(address to, uint256 id, uint256 value, string memory data) public {
        _mint(to, id, value, bytes(data));
    }
}