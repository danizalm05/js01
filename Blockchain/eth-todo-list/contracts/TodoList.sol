pragma solidity ^0.5.0;
//https://www.youtube.com/watch?v=rzvk2kdjr2I&list=PLS5SEs8ZftgUNcUVXtn2KXiE1Ui9B5UrY&index=41
//https://github.com/dappuniversity/eth-todo-list/blob/master/contracts/TodoList.sol

contract TodoList {
  uint public taskCount = 0;//state varibles

  struct Task {
    uint id;
    string content;
    bool completed;
  }

  mapping(uint => Task) public tasks;

  event TaskCreated(
    uint id,
    string content,
    bool completed
  );

  event TaskCompleted(
    uint id,
    bool completed
  );

  constructor() public {
    createTask("Check out dappuniversity.com");
  }

  function createTask(string memory _content) public {
    taskCount ++;
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
