//server object           D:\js01\nodejs\samples\bradtraversy\reference>
//https://www.youtube.com/watch?v=fBNz5xF-Kx4    56:35
//https://github.com/bradtraversy/node_crash_course/blob/master/reference/http_demo.js
//npm init
//npm install  uuid
//npm install  -D nodemon
//if  you delete node modules you can  rebuilld it by running:   npm install 


//https://nodejs.org/dist/latest-v16.x/docs/api/
 
const http = require('http');

function ServerCB(){
   console.log('Server running...')

} 

http.createServer((req, res) => {
     msg = 'Hello World War III' 
     res.write(msg);//Write Response massge
     res.end();
  })
  .listen(5000, () =>ServerCB());
 