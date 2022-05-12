//NPM Node Package Manager Modules | NPM Tutorial for Beginners
//https://www.youtube.com/watch?v=oGO_-DWTmKA&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=3
/*
Node.js Official site: https://nodejs.org
NPM Official site: https://www.npmjs.com/

https://docs.npmjs.com/cli/v8
Run: npm install date-fns.
This command  will add next lines in 'package.json':
                    "author": "",
                    "license": "ISC",
                    "dependencies": {
                        "date-fns": "^2.28.0"
                    }
And  create/change :
     'package-lock.json '
     'node_modules directory'
                    */

/*const { format } = require('date-fns') ;
const {v4: uuid} = require('uuid');
console.log("date-fns: Demo");
console.log(format(new Date(),' yyyy-MM-dd\tHH:mm:ss'))
console.log("uuid  = ",uuid())
console.log("uuid  = ",uuid())
console.log("uuid  = ",uuid())
*/
// Directory: D:\js01\nodejs\samples\DaveGray\01TUT
const logEvents = require('./logEvents');
const EventEmitter =require('events');
class MyEmitter extends EventEmitter{};

//Initialize object
const myEmitter = new MyEmitter();

//Add a listenner  for the log event

myEmitter.on('log',(msg) => logEvents(msg));

setTimeout(() =>{
    //Emit event
    myEmitter.emit('log', 'log event emitted');
},2000);