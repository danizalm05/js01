 //https://www.youtube.com/watch?v=wxbQP1LMZsw&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=9
 //14:00
 
 const express = require('express')
 
 const app  = express()
 
 app.listen(3000,()=> console.log('listing at 300' ))
 app.use(express.static('public'))
 
 