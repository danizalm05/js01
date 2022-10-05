//https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=4
//https://github.com/iamshaunjp/node-crash-course/blob/lesson-2/files.js
//31:00

// Sync code means it will block the code
const fs = require('fs');

function cll_back(err, data){
    if (err) {
        console.log(err);
      }  
      console.log(data.toString());
    }


 
fs.readFile('./docs/blog.txt', (err, data) => {
    cll_back(err, data);
  });

 // writing files
fs.writeFile('./docs/blog.txt', 'hello, world02', () => {
  console.log('file was written');
}); 

if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', err => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}