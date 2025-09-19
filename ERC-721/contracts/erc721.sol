// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Erc721 is ERC721 {
    constructor() ERC721("baekho", "KBH") {}

    function _baseURI() internal pure override returns (string memory) {
        return "";
    }
}