
https://docs.soliditylang.org/en/develop/
https://www.tutorialspoint.com/solidity/solidity_basic_syntax.htm
https://remix.ethereum.org/


1:     

Build Your First Blockchain App - Ethereum Todo List 2019
https://www.youtube.com/watch?v=rzvk2kdjr2I&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=40
https://github.com/dappuniversity/eth-todo-list
https://www.dappuniversity.com/articles/blockchain-app-tutorial

40:10
Table of Contents:
0. Install Dependencies [6:34]
1. Project Setup [9:26]  
2. List Tasks [22:47]  
3. Create Tasks [1:05:07] 
4. Complete Tasks [1:16:40] 




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
------------------------------------
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
    todoList.address:    get the address of the smart contract  in the block chain    
    taskCount = await todoList.taskCount()
    taskCount.toNumber() 
    
         BN { negative: 0, words: [ 1, <1 empty item> ], length: 1, red: null }
         truffle(development)>
            output: BN:0


Steps for  listing out the tasks in the todo list. 
---------------------------------------------------------
  1.  Write code to list tasks in the smart contract
  2.  List tasks from the smart contract inside the Truffle console
  3.  List tasks in the client side application
  4.  Write a test for listing tasks

In order to list the tasks inside the smart contract, we'll need a way 
to model a task in solidity.
 Solidity allows you to define your own data types with structs. 
 We can model any arbitrary data with this powerful feature.
  We'll use a struct to model the task for our todo list like this:           

  Rerun  the smart contract
  ==============
  1. truffle  compile
  2. run gananche
  3. truffle migrate --reset   //Deploy a new copy of the smart contract tot the blockchain
  4. truffle console
  5. Inside the console, let's get a deployed copy of the new smart contract.
         todoList = await TodoList.deployed()
  6. todoList.address  // Get the address 
  7. task = await todoList.tasks(1) #get the task number 1, from the todo list.    
  8. value of 'task[1]' ,task.content  
     'Check out dappuniversity.com',
      
     
   9.  task.id// Print id  
   10.Client side code to interact with the todo list smart contract:
        
       Create the following file  in  './'
            ./bs-config.json
       Create the following files in '/src' dir:
             src/index.html
             src/app.js
       copy the content from git hub
   11. From a new tab start the server:
        npm run dev          
