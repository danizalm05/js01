//13-event-emitter.js
//https://github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/13-event-emitter.js
//https://www.youtube.com/watch?v=RLtyhwFtXQA  15:16

// 1:   Create an eventEmitter object 
const EventEmitter = require('events');
const customEmitter = new EventEmitter();


// 2:     Create Event  listener
// Bind event and event  handler 
// 'response' = the lisener we attach to 'customEmitter' object
// 2'nd argument = the function that is excuted when 'response' ocered
customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})


// 3:    emit a resonse event 
customEmitter.emit('response', 'john', 34);

class Person extends EventEmitter{
  constructor(name){
      super();
      this._name = name;

  }
  get name(){
      return this._name;
  }
}//class Person

let pedro = new Person('Pedro');
let christina = new Person('Christina');
pedro.on('name',()=>{
    console.log('My name is '+ pedro.name);
}) 

 
christina.on('name',()=>{
  console.log('My name is '+ christina.name);
}) 

pedro.emit('name');// Because Person extends EventEmitter,'emit' is a method in Person
christina.emit('name');