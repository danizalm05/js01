// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//30:10 -38:28
//https://www.youtube.com/watch?v=EhPeHeoKF88&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=12 
//https://github.com/dappuniversity/master_solidity/blob/master/examples/3_Arrays.sol
//https://docs.soliditylang.org/en/v0.8.19/ 

contract Arrays {
    uint256[] public uint256Array = [1, 2, 3];
    string[] public stringArray = ["apple", "banana", "carrot"];
    string[] public values;
    uint256[][] public array2D = [[1, 2, 3], [4, 5, 6]];

    function addValue(string memory _value) public {
        //Add one value to 'values' array
        values.push(_value);
    }

    function valueCount() public view returns (uint256) {
        return values.length;
    }
}