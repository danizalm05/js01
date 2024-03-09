//SPDX-License-Identifier: MIT
// 1:58
//https://solidity-by-example.org 
//https://www.youtube.com/watch?v=QEJYSuyYOfw&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p&index=17
//https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.22+commit.4fc1097e.js

pragma solidity ^0.8.0;
 
/*
Only the owner will be able to set a new owner.

*/

contract Ownable {

  address public owner;//state variable
    constructor ( ){
         owner = msg.sender;  
     }//constructor

  
   //only the owner can call the function
   modifier onlyOwner(){ 
      require(msg.sender == owner , "Not owner" ); // require the sender to
                                                    //  be the owner
     
      _;   // check input and save gas
           //  ensure that the function doesn’t run unless the caller is
           //  the owner.
   }//onlyOwner
   //2:40
   function setOwner(address,_newOwner) external onlyOwner{

   }//setOwner()

}//contract