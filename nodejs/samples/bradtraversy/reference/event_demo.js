//Events            D:\js01\nodejs\samples\bradtraversy\referencenode
//https://www.youtube.com/watch?v=fBNz5xF-Kx4    47:53
//https://github.com/bradtraversy/node_crash_course/blob/master/reference/event_demo.js
//npm init
//npm install  uuid
//npm install  -D nodemon
//if  you delete node modules you can  rebuilld it by running:   npm install 


//https://nodejs.org/dist/latest-v16.x/docs/api/
//https://nodejs.org/dist/latest-v16.x/docs/api/events.html
const EventEmitter = require('events');
 
const uuid = require('uuid');//Create random ID 
// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
/*myEmitter.emit('event');
myEmitter.emit('event1');
myEmitter.emit('event');
myEmitter.emit('event');

*/

