// 10-fs-sync.js
// https://github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/10-fs-sync.js
// https://www.youtube.com/watch?v=Oe421EPjeBE   1:10:20 1:14

const { readFileSync, writeFileSync } = require('fs')

var fs = require('fs');

filenames = fs.readdirSync(".");
console.log('filenames.length = ',filenames.length);
for (i = 0; i < filenames.length; i++) {
    console.log('[ '+ i +' ]  ' +filenames[i]);
}


//  קוד א-סינכרוני
fs.readdir(".", 
             function (err, filenames) {
                  var i;
                  for (i = 0; i < filenames.length; i++) {
                          console.log(filenames[i]);
                  }
             }
           );

 




console.log('start')
const first = readFileSync('./08-os-module.js', 'utf8')//this file sould exists before running this program
const second = readFileSync('./09-path-module.js', 'utf8')
console.log(first)
console.log(second)
 
writeFileSync(
  './result.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
 
console.log('done with this task')
console.log('starting the next one')
 