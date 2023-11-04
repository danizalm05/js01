// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//30:00 
//https://github.com/dappuniversity/master_solidity/blob/master/examples/2_Variables.sol
//https://www.youtube.com/watch?v=EhPeHeoKF88&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=11
//https://docs.soliditylang.org/en/v0.8.19/ 

contract MyContract {
    // State Variables
    int256 public myInt = 1;
    uint256 public myUint256 = 1;
    uint8 public myUint8 = 1;

    string public myString = "Hello, World!";
    bytes32 public myBytes32 = "Hello, World!";

    
    address public myAddress = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    
    struct MyStruct {
        uint256 myUint256;
        string myString;
    }
   

    MyStruct public myStruct = MyStruct(1, "Hello, World!");

    // Local Variables
     function getValue() public pure returns (uint256) {
        uint256 value = 1;
        return value;
    }
}
 