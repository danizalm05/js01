pragma solidity ^0.5.1;
 
contract MyContract {
  //https://www.dappuniversity.com/articles/solidity-tutorial 
  string public  value = "mValue";
  string public  constant value01 = "myV     alue";
  bool public myBool = true;
  int public myInt = 1;
  uint public myUint = 1;
  uint256 public myUint256 = 9999;//Specify number of bits for the number. 
  uint8 public myUint8 = 8;//restrict the value to 8 bits 

 
  constructor() public {
     
  }
   

  function set(string memory _value ) public {
     value = _value;
    }
 }
