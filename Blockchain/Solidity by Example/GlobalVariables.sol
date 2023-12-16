// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
// 

//https://solidity-by-example.org 
//https://www.youtube.com/watch?v=ryA86ZiSD-w&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p&index=7

//https://remix.ethereum.org/


/* variables
   There are 3 types of variables in Solidity

    local: declared inside a function not stored on the blockchain
    state: declared outside a function stored on the blockchain
    global (provides information about the blockchain)

*/
/* 
Difference between external and public  
----------------------------------------
public functions: Solidity   copies array
 arguments to memory.

external functions: can read directly from calldata.
 
 Memory allocation is expensive,
 whereas reading from call data is cheap.
 */ 
/**
Getter functions can be declared view or pure.

     View function: no state will be changed.
     Pure function:  no state variable will be changed or read.
 */
contract GlobalVariables  {
    // State variables are stored on the blockchain.
    // They are declared in a contract but outside a function
    string public text = "Hello";
    uint public num = 123;
    //view : read only functio
    function globalVars() external view  returns(address,uint,uint){
        address sender = msg.sender;//globel variable that stores the address 
        //that called this function
        uint timestamp = block.timestamp;
        uint blockNum = block.number;
        return(sender, timestamp, blockNum);
          }
}