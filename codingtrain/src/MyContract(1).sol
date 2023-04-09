pragma solidity ^0.5.1;
 
contract MyContract {
  //https://www.dappuniversity.com/articles/solidity-tutorial 
  string public value;
 
  constructor() public {
    value = "myValue";
  }
   

  function set(string memory _value ) public {
     value = _value;
    }
 }
