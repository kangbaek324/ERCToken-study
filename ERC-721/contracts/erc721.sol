// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Erc721 is ERC721 {
    constructor() ERC721("baekho", "KBH") {}

    function mint(address to, uint256 id) external {
        _mint(to, id);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://raw.githubusercontent.com/kangbaek324/ERCToken-study/main/ERC-721/metadata/";
    }
}