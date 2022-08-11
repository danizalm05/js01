 //Working with Data and APIs in JavaScript  Coding Train
 
 //https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X
 //https://www.youtube.com/watch?v=wxbQP1LMZsw&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=9
 //15:00
 
 const express = require('express')
 
 const app  = express() ;  
 
 app.listen(3000,()=> console.log('listing at http//localhost:3000' ))
 app.use(express.static('module2'))// public is the directory than contains the 'index.html'
 
 