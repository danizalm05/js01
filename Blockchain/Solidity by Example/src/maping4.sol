 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//38:28 -50:00
//https://www.youtube.com/watch?v=EhPeHeoKF88&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=12 
//https://github.com/dappuniversity/master_solidity/blob/master/examples/4_Mapping.sol
//https://docs.soliditylang.org/en/v0.8.19/ 
contract Mappings {
    mapping(uint256 => string) public names;
    mapping(uint256 => Book) public books;

    //mapping inside a mapping (all the books that belong to a spacifi account)
    mapping(address => mapping(uint256 => Book)) public myBooks;

    struct Book {
        string title;
        string author;
    }

    constructor() {
        names[1] = "Adam";
        names[2] = "Bruce";
        names[3] = "Carl";
    }

    function addBook(
        uint256 _id,
        string memory _title,
        string memory _author
    ) public {
        books[_id] = Book(_title, _author);
    }

   //To use the myBooks we must supply the address of the caller from the account window
   // and put it in the parmeter window and also the id sould be put in its window
    function addMyBook(
        uint256 _id,
        string memory _title,
        string memory _author
    ) public {
        myBooks[msg.sender][_id] = Book(_title, _author);
    }
}
// Solidity varibles type
//============================
// 1. state varibles 
// 2. local varibles  
// 3. global varile
// msg is a global varile in sollidity