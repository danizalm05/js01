//https://www.youtube.com/watch?v=Oe421EPjeBE  15:07
//https://github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/01-intro.js

const amount = 12

if (amount < 10) {
    console.log('small number')
  } else {
    console.log('large number')
  }
  
  console.log(`hey it's my first node app!!!`)


  // GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
console.log( __filename)
setInterval(() => {
  console.log('hello world')//Run this every 1000 ms
}, 1000)