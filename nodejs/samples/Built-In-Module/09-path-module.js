//09-path-module.js 
//https://github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/09-path-module.js
// https://www.youtube.com/watch?v=Oe421EPjeBE   1:04:20
 
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)
console.log("__dirname = " +__dirname)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log("absolute = " + absolute)


 