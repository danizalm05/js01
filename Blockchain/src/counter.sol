// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//6:00 
//https://github.com/dappuniversity/master_solidity/blob/master/examples/1_Counter.sol
//https://www.youtube.com/watch?v=EhPeHeoKF88&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=11
//https://docs.soliditylang.org/en/v0.8.19/ 


contract Counter {
    uint256 count;

    function getCount() public view returns (uint256) {
        return count;
    }

    function incrementCount() public {
        count++;
    }
}