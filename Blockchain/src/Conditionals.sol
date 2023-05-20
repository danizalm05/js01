// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
//https://www.youtube.com/watch?v=EhPeHeoKF88&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=12
// 50:00 - 1:02:10
//https://github.com/dappuniversity/master_solidity/blob/master/examples/5_Conditionals.sol
//https://docs.soliditylang.org/en/v0.8.19/ 


contract Conditionals {
    uint256[] public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    address public owner; 

    constructor() {
        owner = msg.sender; // Store the caller of the function
    }

    function countEvenNumbers() public view returns (uint256) {
        uint256 count = 0;

        for (uint256 i = 0; i < numbers.length; i++) {
            if (isEvenNumber(numbers[i])) {
                count++;
            }
        }

        return count;
    }

    function isEvenNumber(uint256 _number) public pure returns (bool) {
        if (_number % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }

    function isOwner() public view returns (bool) {
         //If we wiil change the account number this function will return False
        return (msg.sender == owner);
    }
}