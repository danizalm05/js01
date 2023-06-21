pragma solidity ^0.5.0;
//https://www.youtube.com/watch?v=rzvk2kdjr2I&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=41
//https://github.com/dappuniversity/eth-todo-list/blob/master/contracts/TodoList.sol
 
contract TodoList {
  uint public taskCount = 0;//state varibles
  //A  definition of a  model of 'Task' for our todo list.(this not represent an instance of a Task)
  struct Task {
    uint id;
    string content;
    bool completed;
  }
    //mapping is similler to hash table (Key, vlaue) pair
  //key is 'uint' which points to the 'struct Task '
  mapping(uint => Task) public tasks; //'tasks' is a state varibles 

  //state varibles  = values which are permanently stored in contract storage.

  event TaskCreated(
    uint id,
    string content,
    bool completed
  );

  event TaskCompleted(
    uint id,
    bool completed
  );


// constructor  run only once, whenever the contract is initialized, i.e., deployed to the blockchain
  constructor() public {
    createTask("Check out dappuniversity.com");
  }

  function createTask(string memory _content) public {
    
    taskCount ++;
    //reference to the mapping 'mapping(uint => Task) public tasks.
    tasks[taskCount] = Task(taskCount, _content, false);
    emit TaskCreated(taskCount, _content, false);
  }

  function toggleCompleted(uint _id) public {
    Task memory _task = tasks[_id];
    _task.completed = !_task.completed;
    tasks[_id] = _task;
    emit TaskCompleted(_id, _task.completed);
  }

}
