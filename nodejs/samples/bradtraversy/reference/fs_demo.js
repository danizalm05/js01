//File  system
//https://www.youtube.com/watch?v=fBNz5xF-Kx4    35:35
//https://github.com/bradtraversy/node_crash_course/blob/master/reference/fs_demo.js
//npm init
//npm install  uuid
//npm install  -D nodemon
//if  you delete node modules you can  rebuilld it by running:   npm install 


//https://nodejs.org/dist/latest-v16.x/docs/api/
//https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
const fs = require('fs');
const path = require('path');

var  fileName =  'helloworld.txt'; 
var  NewfileName =   'hello.txt';
var  dirName ='./test';
var PathFile = path.join(__dirname,  dirName, fileName);
var NewPathFile = path.join(__dirname, dirName, NewfileName )
var encoding = 'utf8'; 
/*
// Create folder 
fs.mkdir(path.join(__dirname,"/test"),{}, 
               err => {
                       if (err) {
                            console.log('Folder already exists');
                           // throw err;
                       }
                       else
                           console.log('Folder created...');//if  there is no  error
           }
                ); 


// Create and write to file
 fs.writeFile(
     path.join(__dirname,   '/test',    'hello.txt'), 'Hello World!',
       err => {
           if (err) throw err;
           console.log('File written to...');

          // File append text 
          fs.appendFile(
             path.join(__dirname, '/test', 'hello.txt'),
                   ' I love Node.js',
            err => {
                  if (err) throw err;
                  console.log('File append text   to...');
           }
       );
 }
 );         
 
 
 */

 // Read file
  
 function readFileClBk (err, data){
    if (err) throw err;
    console.log(data);
 }
  fs.readFile(PathFile, encoding, 
                        (err, data) => { readFileClBk(err, data) }
              ); 

 // Rename file
 //var  fileName = 'hello.txt';  dirName ='./test';

 function renameFileClBk (err){
    if (err) throw err;
      else console.log('Renamed  File = '+ fileName +" to:  \nNew File = "+ NewfileName);
 }

 fs.rename(PathFile, NewPathFile,  err=>{  renameFileClBk (err) } );             