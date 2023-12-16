// SPDX-License-Identifier: MIT
//https://solidity-by-example.org 
//https://remix.ethereum.org/  
//https://www.youtube.com/watch?v=SB705OK3bUg&list=PLO5VPQH6OWdVQwpQfw9rZ67O6Pjfo6q-p&index=13
//https://solidity-by-example.org/loop/
 
 //Solidity supports for, while, and do while loops.
//Don't write loops that are unbounded as this can hit the gas limit,
//  causing your transaction to fail.
 //For the reason above, while and do while loops are rarely used.

//3:22
pragma solidity ^0.8.0;


contract ForAndWhileLoops {

    //Pure function: a contract is not going to read or write from 
    //     contract state, and everything you do only works with memory 
    //     variables.
    function loops() external pure {
         for (uint i = 0; i < 10; i++) {
            if (i == 3) {
                // Skip to next iteration with continue
                continue;
            }
             if (i == 5) {
                // Exit loop with break
                break;
            }
         }
       
        // while loop
        uint j = 0;
        while (j < 10) {
            j++;
        }

    }
    function sum(uint _n) external pure returns(uint){
      uint s;
       for (uint i = 1; i < 10; i++) {
          s += i;
       }
       return s;  
    }
    
    }
       