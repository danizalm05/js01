// SPDX-License-Identifier: MIT
//Constructor
//https://solidity-by-example.org 
https://www.youtube.com/watch?v=7XwWBr4TAz4&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p&index=16//https://remix.ethereum.org/

pragma solidity ^0.8.0;
// runing te program:
//    1. On Remix,Compile the program
//    2. Run 
//    3. add any string in the deploy button and press deploy.
//    4. On The owner window you'll see the account address
//    5. on the x window you can see the value of x   


contract Constructor {
     address public owner;
     uint public x;
     constructor (uint _x){
           owner = msg.sender; // initlize owner to the seneder account number 
           x = _x;
     }//constructor
}//contract