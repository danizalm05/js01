//Tutorial #7 - ejs view engine
 //27:00
 
//https://www.youtube.com/watch?v=yXEesONd_54&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=7
//https://github.com/iamshaunjp/node-crash-course/blob/lesson-7/app.js
//https://github.com/iamshaunjp/node-crash-course/tree/lesson-7
//https://www.npmjs.com/package/express
//https://www.npmjs.com/
 
 //Installation is done using the npm install command:

// $ npm install express
// $ npm install ejs
 


const express = require('express');
// express app
const app = express();

// register the view engine "ejs"
app.set('view engine', 'ejs');//default 'views' 
//app.set('views', 'myviews');//Change  the default 'views' directory 



app.listen(3000); // listen for requests



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
 