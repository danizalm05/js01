// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
// 

//https://solidity-by-example.org/function/
//https://www.youtube.com/watch?v=Mm6834AAY00&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p&index=5 
//https://www.youtube.com/watch?v=5Gxzwn0SQDU&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p&index=6
//https://remix.ethereum.org/


/* variables
   There are 3 types of variables in Solidity

    local: declared inside a function not stored on the blockchain
    state: declared outside a function stored on the blockchain
    global (provides information about the blockchain)

*/
 

contract Variables {
    // State variables are stored on the blockchain.
    // They are declared in a contract but outside a function
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public {
        // Local variables are not saved to the blockchain.
        uint i = 456;

        // Here are some global variables
        uint timestamp = block.timestamp; // Current block timestamp
        address sender = msg.sender; // address of the caller
    }
}