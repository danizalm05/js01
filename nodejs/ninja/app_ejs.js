//Tutorial #7 - View Engines
// #7 https://www.youtube.com/watch?v=yXEesONd_54&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=7
//    https://github.com/iamshaunjp/node-crash-course/blob/lesson-7/views/index.ejs
 
//Tutorial #8 - Middleware
// #8 https://www.youtube.com/watch?v=_GJKAs7A0_4&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=8 
//    https://github.com/iamshaunjp/node-crash-course/blob/lesson-8/app.js    
//--------------------------------------------- 
 
//Tutorial #9 - MongoDB
// https://www.youtube.com/watch?v=bxsemcrY4gQ&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=9 
//https://github.com/iamshaunjp/node-crash-course/blob/lesson-9/app.js


//Starting the  application
 //  1. node app_ejs.js or  nodemon app_ejs
 //  2. from browser run: http://localhost:3000/


 //https://www.youtube.com/watch?v=yXEesONd_54&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=7
//https://github.com/iamshaunjp/node-crash-course/blob/lesson-7/app.js
//https://github.com/iamshaunjp/node-crash-course/tree/lesson-7
//https://www.npmjs.com/package/express
//https://www.npmjs.com/
 
 //Installation is done using the npm install command:

// $ npm install express
// $ npm install ejs
// npm  install morgan // Install3'rd party middlewae
// https://www.npmjs.com/package/morgan 


const express = require('express');
const morgan = require('morgan');//3'rd party middlewae
// express app
const app = express();
app.listen(3000); // listen for requests

// register the view engine "ejs"
app.set('view engine', 'ejs');//default dir is './views' 
//app.set('views', 'myviews');//Change  the default 'views' directory 

// middleware & static  './public' dir content is public now
app.use(express.static('public'));



app.use((req, res, next ) => {
  console.log('-----------new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('----method: ', req.method);
  next() ; // Move to the  next 'app.ge't
});
// next middleware
app.use((req, res, next) => {
  console.log('\n\n          in the next middleware');
  next();
});


app.use(morgan('dev'));// dev option of 3'rd party middlewae
app.use(morgan('tiny'));//tiny option  3'rd party middlewae
 
//---------------------------------------

function outPut(res, str){
    res.send(str);

}
  

app.get('/',  (req, res) => {
   
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
   res.render('index.ejs'  , { title: ' - index' ,blogs });
  });
 
  
app.get('/about', (req, res) => {
   res.render('about.ejs' , { title: ' - about' });//title property = '- about'
});
 

app.get('/blogs/create', (req, res) => {
  res.render('create',  { title: ' - create' } );
}); 


// 404 page
//The next function is use only if no other above functions is used

app.use((req, res) => {
  res.status(404).render('404', { title: ' - 404' });
});
 