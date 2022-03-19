// 10-fs-sync.js
// https://github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/11-fs-async.js
// https://www.youtube.com/watch?v=Oe421EPjeBE   01:18:50 1:34

const { readFile, writeFile } = require('fs')

console.log('start')
readFile( './08-os-module.js',
            'utf8', 
            (err, result) => {
                 if (err) {
                   console.log("readFile 1 " + err)
                  return
            }
 const first = result
 readFile('./10-fs-sync.js', 
            'utf8', 
            (err, result) => {
                 if (err) {
                     console.log("readFile 2  " + err)
                    return
                       }
  const second = result
  writeFile(
              './result.txt',
              `Here is the result : ${first}, ${second}`,
               (err, result) => {
                   if (err) {
                     console.log(err)
                     return
                    }
                   console.log('done with this task')
              }
           )   
     })
 })
console.log('starting next task')