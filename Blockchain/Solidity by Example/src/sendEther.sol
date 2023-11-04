pragma solidity ^0.5.1;
//https://www.youtube.com/watch?v=ipwxYa-F1uY    50:45
//https://www.dappuniversity.com/articles/solidity-tutorial"

//1. Chose an accout as a wallet, 
//2. Copy the account number paste it in the "deploy"   
//3. Press "buyToken
//4. copy that address  to the window near the "balance" button  and press "balnce" button
//5. Change value to "Ether". and value to 2.
//6. Press  balance. 

contract MyContract {
    
    mapping(address => uint256) public balances;
    address payable wallet;
    
    event Purchase(
         address indexed  _buyer,
         uint256  _amount 
    );

    constructor(address payable _wallet) public {
        wallet = _wallet;
    }

   
    function()  external payable {
         buyToken();
    }

    function buyToken() public payable {
        balances[msg.sender] += 1;
        wallet.transfer(msg.value);
        emit Purchase(msg.sender, 1);
    }
}