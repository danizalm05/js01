//file system
//https://www.youtube.com/watch?v=yQBw8skBdZU&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=2
//12:50
//https://nodejs.org/dist/latest-v17.x/docs/api/fs.html

/*In this Node.js tutorial, we'll explore the File System (fs) common core module. 
You will see examples of all CRUD (create, read, update and delete) operations for files in 
Node.js. 
You will also learn about the asynchronous nature of Node.js and how to avoid "callback hell" 
by using fsPromises. T 
 * 
D:\js01\nodejs\samples\DaveGray\01TUT\files>
 */

const fs = require('fs');
const path = require('path');


 

filePath = path.join(__dirname,'starter.txt')
outFilePath = path.join(__dirname,'replay.txt')
outAppendFilePath = path.join(__dirname,'append_test.txt')
newNameFilePath = path.join(__dirname,'new_append_test.txt')

console.log("\n\outAppendFilePath = ",outAppendFilePath);

fs.writeFile(outAppendFilePath,"line 1 to out fil\n" ,(err ) => 
   {
      if(err) throw err;
      console.log("Write opreation completed!!!!!");
     
      fs.appendFile(outAppendFilePath,"append 1  line to out file" ,(err ) => 
        {
          if(err) throw err;
          console.log("appendFile opreation completed!!!!!");
         
            fs.rename(outAppendFilePath, newNameFilePath ,(err ) => 
             {
             if(err) throw err;
             console.log("Rename opreation completed!!!!!");
             }  
           );

        }  
      );
   
      
    }  
 );
  

 

fs.readFile(filePath, 'utf8'  ,(err,data ) => 
   {
     if(err) throw err;
     console.log(data);
   }  
  );

  console.log("Second command ");

  process.on('uncaughtException', function (err) {
    console.log("\n\n  uncaughtException \n\n" + err);
  })