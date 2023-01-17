//Tutorial #6 - Express Apps


//https://www.youtube.com/watch?v=Lr9WUkeYSA8&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=6
//https://github.com/iamshaunjp/node-crash-course/tree/lesson-3
//https://github.com/iamshaunjp/node-crash-course/tree/lesson-6
//https://github.com/iamshaunjp/node-crash-course/blob/lesson-6/app.js

https://www.youtube.com/watch?v=yXEesONd_54&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=8

//https://www.npmjs.com/package/express
//https://www.npmjs.com/
 
 //Installation is done using the npm install command:
 // $ npm install express
 //15:00
const express = require('express');
// express app
const app = express();

// listen for requests
app.listen(3000);

//---------------------------------------

function outPut(res, str){
    res.send(str);

}


app.get('/',  (req, res) => {
    outPut(res,'<p>home123 page</p>')//Local function to send a string
    
    // This is the method of the 'express'
    //res.sendFile('./views/index.html', { root: __dirname });
  });
 
  
app.get('/about', (req, res) => {
    //outPut(res,'<p>about page</p>')
    // res.send('<p>about page</p>');//send a string
    current_dir = {root: __dirname}
    res.sendFile('./views/about.html', current_dir  );
  });

  // redirects /about-us to /about
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});


// 404 page
//The next 'use' function is use only if no other above functions is used
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});