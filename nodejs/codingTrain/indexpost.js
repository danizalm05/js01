 //2.3 HTTP Post Request with fetch()  
 // This is the SERVER    side
 //To start  run:    'nodemon indexpost.js '
 //https://www.youtube.com/watch?v=Kw5tC5nQMRY&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=11  
 //https://www.youtube.com/watch?v=Kw5tC5nQMRY
 
 //https://expressjs.com/
 //https://expressjs.com/en/guide/routing.html
 
 //11:40
 
 const express = require('express')
 
 const app  = express() ;  
 
 app.listen(3000,()=> console.log('listing at http//localhost:3000' ))
 app.use(express.static('module2'))// public is the directory than contains the 'index.html'
 app.use(express.json({ limit: "1mb" }));//Allow parsing json
 
 // POST method route
app.post('/api', (req, res) => {
   console.log( " POST method route")
   console.log(  req.body)//Print to the 'cmd screen'
   const data = req.body
   res.json({
    status:  "success",
    latitude: data.lat,
    longitude: data.lon 
  });
  //res.send('POST request to the homepage')
})
 