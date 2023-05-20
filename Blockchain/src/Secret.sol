// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// 1:25:00   1:33:00 
//https://www.youtube.com/watch?v=EhPeHeoKF88&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=12 
//https://github.com/dappuniversity/master_solidity/blob/master/examples/7_Secret.sol
//https://docs.soliditylang.org/en/v0.8.19/ 
//https://docs.soliditylang.org/en/develop/
//https://www.tutorialspoint.com/solidity/solidity_basic_syntax.htm
//https://remix.ethereum.org/ 

 
// Showcase contract inheritance

contract Ownable {
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "must be owner");
        _;
    }
}
//----------------------------------
contract SecretVault {
    string secret;

    constructor(string memory _secret) {
        secret = _secret;
    }

    function getSecret() public view returns (string memory) {
        return secret;
    }
}
//----------------------------------
contract Secret is Ownable {
    address secretVault;

    constructor(string memory _secret) {
        SecretVault _secretVault = new SecretVault(_secret);
        secretVault = address(_secretVault);
        super;// Call constractor of the parent contract
    }

    function getSecret() public view onlyOwner returns (string memory) {
        return SecretVault(secretVault).getSecret();
    }
}