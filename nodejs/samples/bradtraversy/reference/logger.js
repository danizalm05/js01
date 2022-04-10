//Events logger.js           D:\js01\nodejs\samples\bradtraversy\ 
//https://www.youtube.com/watch?v=fBNz5xF-Kx4    50:00
//https://github.com/bradtraversy/node_crash_course/blob/master/logger.js 

//npm init
//npm install  uuid
//npm install  -D nodemon
//if  you delete node modules you can  rebuilld it by running:   npm install 


//https://nodejs.org/dist/latest-v16.x/docs/api/
 

const EventEmitter = require('events');
const uuid = require('uuid');//Create random ID 
// The uuid is initilize with 'npm install  uuid' 
// This new module is stored in '<Root dir>/mode_modules'  dir 

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}


// Next lines sould be in another file

// module.exports = Logger;
//const Logger = require('/logger.js')

const logger = new Logger();
console.log("Demo of 'uuid.v4()' ==>", uuid.v4())
logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');