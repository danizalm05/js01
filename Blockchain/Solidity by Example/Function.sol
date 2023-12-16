// SPDX-License-Identifier: MIT
//
//https://solidity-by-example.org/function/
//https://www.youtube.com/watch?v=Mm6834AAY00&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p&index=5 
//https://remix.ethereum.org/


// compiler version must be greater than or equal to 0.8.20 and 
//less than 0.9.0


 pragma solidity ^0.8.0;

 
//pragma solidity ^0.8.20;

contract Function {
   function add(uint x, uint y ) external pure returns (uint) {
        return (x + y);
    }
   function sub(uint x, uint y ) external pure returns (uint) {
        return (x - y);
    }

}