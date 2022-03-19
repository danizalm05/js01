//https://www.youtube.com/watch?v=fBNz5xF-Kx4    22:00
//https://github.com/bradtraversy/node_crash_course/blob/master/index.js 
//npm init
//npm install  uuid
//npm install  -D nodemon
//if  you delete node modules you can  rebuilld it by running:   npm install 


//https://nodejs.org/dist/latest-v16.x/docs/api/
const path = require('path');

//console.log("_filenam = " +  __filename );

// Base file name    https://nodejs.org/dist/latest-v16.x/docs/api/path.html
console.log("Base file name = "+path.basename(__filename));

// Directory name
console.log("Directory name = " +path.dirname(__filename));

// File extension
console.log("File extension = "+ path.extname(__filename));

// Create path object
path_objec = path.parse(__filename);
console.log("\npath object = " + path_objec  +"\n \n");
// Concatenate paths
console.log("Concatenate paths = " + path.join(__dirname, 'test', 'hello.html'));


 // get the path delimiter base on the current OS Environment
const platSpec = path.delimiter;

console.log("Path delimiter base = " + platSpec);
// get the parent folder director
const parentDir = path.dirname(__dirname);

console.log("Parent folder director = " + parentDir);
/* 
// ge the path format on POSIX : / and Windows : \
// more info : https://nodejs.org/dist/latest-v11.x/docs/api/path.html#path_path_format_pathobject
 const pathformat = path.format({
  dir: pathjoin,
  root: pathjoin,
  base: pathjoin,
  name: pathjoin,
  ext: pathjoin,
});

console.log(pathformat);
*/

 