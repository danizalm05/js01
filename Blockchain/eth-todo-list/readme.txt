
https://docs.soliditylang.org/en/develop/
https://www.tutorialspoint.com/solidity/solidity_basic_syntax.htm
https://remix.ethereum.org/

22:01

1:     

Build Your First Blockchain App - Ethereum Todo List 2019
https://www.youtube.com/watch?v=rzvk2kdjr2I&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=40
https://github.com/dappuniversity/eth-todo-list
https://www.dappuniversity.com/articles/blockchain-app-tutorial



Installing  dependencies
=============================
1.Add ganache   https://trufflesuite.com/ganache/ Download an install
2.Add truffle   npm install -g truffle@5.0.2
 (https://trufflesuite.com/truffle/)
Truffle - Truffle Suite
Truffle is the most popular development framework for Ethereum with a mission to make your life a 



3. Metamask Ethereum Wallet : Alow goggle chrom connection to blockchain networks.

Project  setup
--------------
1. Create dir '/eth-todo-list'
2. in '/eth-todo-list' initialize a new truffle project to develop our project like this:

3. Create a new truffle project: 
    truffle version 
4. Create file package.json and add the text:
   {
  "name": "eth-todo-list",
  "version": "1.0.0",
  "description": "Blockchain Todo List Powered By Ethereum",
  "main": "truffle-config.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "dev": "lite-server",
    "test": "echo \"Error: no test specified\" && sexit 1"
  },
  "author": "gregory@dappuniversity.com",
  "license": "ISC",
  "devDependencies": {
    "bootstrap": "4.1.3",
    "chai": "^4.1.2",
    "chai-as-promised": "^7.1.1",
    "chai-bignumber": "^2.0.2",
    "lite-server": "^2.3.0",
    "nodemon": "^1.17.3",
    "truffle": "5.0.2",
    "truffle-contract": "3.0.6"
  }
}


5. Install the dependencies from the command line like this:
                npm install
 ------------------------------
 
Blockchain: highly secure and reliable network that 
 records data in a distributed ledger that is not controlled by 
 a central authority. 

 --------------------------
 Cpmpile
 1. truffle  compile
  this will  compile to the file"\eth-todo-list\build\contracts\todo.jason"
 2.Open the file 'truffle-config.js' erase all the content and put
   next lines:


   module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}

3. Run Gananche

4. Create a migration file:   
   create a new file  "2_deploy_contracts.js"  in /migration
   Put the next text:

     var TodoList = artifacts.require("./TodoList.sol");

          module.exports = function(deployer) {
             deployer.deploy(TodoList);
      };
 5. Run this migration script from the command line like this:
      truffle migrate 
 6. open the truffle console from the command line like this:
       truffle console     
 7. todoList = await TodoList.deployed()
   ("TodoList" = name of the variable that we created in the migration file)
 8. Write ' TodoList' and you'll get the content of the var  
    todoList.address:    get the address of the smart contract     
    taskCount = await todoList.taskCount()
    taskCount.toNumber() 
    
         BN { negative: 0, words: [ 1, <1 empty item> ], length: 1, red: null }
         truffle(development)>
            output: BN:0