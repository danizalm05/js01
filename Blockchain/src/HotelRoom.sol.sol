// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//1:02:30 - 1:25: 
//https://www.youtube.com/watch?v=EhPeHeoKF88&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=12 
//https://github.com/dappuniversity/master_solidity/blob/master/examples/6_HotelRoom.sol 
//https://docs.soliditylang.org/en/v0.8.19/ 
//https://docs.soliditylang.org/en/develop/
//https://www.tutorialspoint.com/solidity/solidity_basic_syntax.htm
//https://remix.ethereum.org/ 

// Showcase payment transfers, enums, modifiers & events

contract HotelRoom {
    enum Statuses {  Vacant, Occupied }
	
    Statuses public currentStatus;

    event Occupy(address _occupant, uint256 _value);

    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
        currentStatus = Statuses.Vacant;    //Initialize the currentStatus
    }

    modifier onlyWhileVacant() {
        require(currentStatus == Statuses.Vacant, "Currently occupied.");
        _; // if the above require condiation is corect resume the program
    }

    modifier costs(uint256 _amount) {
        require(msg.value >= _amount, "Not enough Ether provided.");
        _;
    }

    function book() public payable onlyWhileVacant costs(2 ether) {
        currentStatus = Statuses.Occupied;

        (bool sent, bytes memory data) = owner.call{value: msg.value}("");
		// sent will be 'true' if the 'call' will be sent
        require(sent);

        emit Occupy(msg.sender, msg.value);
    }
}