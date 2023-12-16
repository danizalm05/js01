 // SPDX-License-Identifier: MIT
//https://solidity-by-example.org 
 //https://remix.ethereum.org/
//https://www.youtube.com/watch?v=Ld8bFWXLSfs&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p&index=12
//https://solidity-by-example.org/if-else/
 


pragma solidity ^0.8.20;

contract IfElse {
    function foo(uint x) public pure returns (uint) {
        if (x < 10) {
            return 0;
        } else if (x < 20) {
            return 1;
        } else {
            return 2;
        }
    }

    function ternary(uint _x) public pure returns (uint) {
        // if (_x < 10) {
        //     return 1;
        // }
        // return 2;

        // shorthand way to write if / else statement
        // the "?" operator is called the ternary operator
        return _x < 10 ? 1 : 2;
    }
}
