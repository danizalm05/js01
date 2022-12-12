//https://www.youtube.com/watch?v=-HPZ1leCV8k&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=3
//https://www.youtube.com/watch?v=DQD00NAUPNk&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=4
//https://www.youtube.com/watch?v=bdHE2wHT-gQ&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=5
//https://github.com/iamshaunjp/node-crash-course/tree/lesson-3
//https://github.com/iamshaunjp/node-crash-course/tree/lesson-4
//https://github.com/iamshaunjp/node-crash-course/tree/lesson-5

//https://www.npmjs.com/
//https://www.npmjs.com/package/nodemon
//https://www.npmjs.com/package/lodash
// https://lodash.com/docs/4.17.15
// https://lodash.com/
//$ npm i   lodash
 //8:20


const http = require('http');
const fs = require('fs');
const _ = require('lodash'); //need to run: 'npm i lodash'

function outPut(res, data ) {
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  });
  greet();
  greet(); 
  res.setHeader('Content-Type', 'text/html');
  res.write(data);
  res.end(" ------");
}

function routing(req, res){
  let path = './views/'; 
  console.log('req.url =', req.url);
  console.log();
  console.log(path);
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
      case '/about':
        path += 'about.html';
        res.statusCode = 200;
        break;
      case '/about-us':   
        res.statusCode = 301;
        res.setHeader('Location', '/about');//A new location
        res.end();
        break;
      default:
        path += '404.html';
        res.statusCode = 404;  
  }
  //console.log(path,  res.statusCode);
  return(path)
}

const server = http.createServer((req, res) => {
     // lodash
  
    // set header content type
    res.setHeader('Content-Type', 'text/html');
    let path = routing(req, res);
    
    fs.readFile(path, (err, data) => {
          if (err) {
            console.log(err);
            res.end();
          }
         else{  outPut(res, data)  }
    } );
  });


  // localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
  });