// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title ThreeCoin
 * @dev ThreeCoin is a simple ERC-20 token with ownership functionality.
 */
contract ThreeCoin is ERC20 {
    // Address of the contract author
    address public author;

    // Address of the points leader
    address public leader;

    // Current score of the leader
    uint256 public leaderScore;

    /**
     * @dev Constructor that mints initial supply and sets the contract author.
     */
    constructor() ERC20("ThreeCoin", "OLF") {
        _mint(msg.sender, 1000000 * (10**uint256(decimals())));
        author = msg.sender;
    }

    /**
     * @dev Mint new tokens to the specified address.
     * @param to The address to which new tokens will be minted.
     * @param amount The amount of tokens to mint.
     */
    function mint(address to, uint256 amount) public virtual {
        _mint(to, amount * (10**uint256(decimals())));
    }

    /**
     * @dev Function called at the end of each game to pay the author and the leader.
     * @param playerAddress The address of the game winner.
     * @param score The score of the game.
     */
    function endGame(address playerAddress, uint256 score) external {
        if (score > leaderScore) {
            // Update the leader
            leader = playerAddress;
            leaderScore = score;
        }

        // Payment to the author
        _mint(author, 10 * (10**uint256(decimals())));

        // Payment to the leader
        _mint(leader, 5 * (10**uint256(decimals())));
    }
}
