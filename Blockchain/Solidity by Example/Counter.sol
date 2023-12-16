// SPDX-License-Identifier: MIT
//https://solidity-by-example.org 
//https://www.youtube.com/watch?v=zzT3a7BJxgw&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p&index=9 
//https://remix.ethereum.org/


// compiler version must be greater than or equal to 0.8.20 and 
//less than 0.9.0



pragma solidity ^0.8.20;

contract Counter {
    uint public count; //State varibles.  Declared inside contract scope 
    //and outside function  scope. stored on the  blockchain
     
    // public functions: Solidity  copies array arguments to memory.
    // View function: Going to read from storage, but not write to it.
    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() public {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() public {
        // This function will fail if count = 0
        count -= 1;
    }
}