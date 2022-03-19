 // CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
//https://www.youtube.com/watch?v=Oe421EPjeBE  33:18 45:00
//https://github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/03-modules.js


//main program
const names = require('./04-names')
console.log("names = "+names)
const sayHi = require('./05-utils')
const data  = require('./06-alternative-flavor')
console.log("data =",data)
require('./07-mind-grenade') // Contains the 'addValues()' function

sayHi('susan') //05-util.js
sayHi(names.john)
sayHi(names.peter)
console.log(module)