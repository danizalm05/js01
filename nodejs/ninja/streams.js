//https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=4
//https://github.com/iamshaunjp/node-crash-course/blob/lesson-2/streams.js 
//32:00  42:00

// Streams = Using data, before it has finished loading

const fs = require('fs');

//Create a read stream
const readStream = fs.createReadStream('./docs/blog3.txt' , { encoding: 'utf8'});

//Create a write stream
const writeStream = fs.createWriteStream('./docs/blog4.txt');


readStream.on('data', chunk => {
     console.log('---- NEW CHUNK ----');
     console.log(chunk);

     writeStream.write('\nNEW CHUNK:\n');
     writeStream.write(chunk);
 
  });

  // piping
// readStream.pipe(writeStream);