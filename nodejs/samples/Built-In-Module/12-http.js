// 12-http.js
// https://github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/12-http.js
// https://www.youtube.com/watch?v=Oe421EPjeBE  01:34:0

const http = require('http')

//req = Incomming request    res = reponse of our server
const server = http.createServer(
                (req, res) => {
                
                  /* if (req.url === '/') {
                      res.end('welcome to our home page')//End request
                    }
                   if (req.url === '/about') {
                       res.end('<H1>Here is our short history</H1>')
                   }
                   res.end(`
                             <h1>Oops!</h1>
                             <p>We can't seem to find the page you are looking for</p>
                             <a href="/">back home</a>
                        `)*/
                // ###################################
                // ###################################
                //
                //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
                // SWITCH TO IF, ELSE IF, ELSE (BELOW)
                // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
                console.log(req)
                if (req.url === '/') {
                    res.end('Welcome to our home page')
                } else if (req.url === '/about') {
                    res.end('Here is our short history')
                } else {
                    res.end(`
                    <h1>Oops!</h1>
                    <p>We can't seem to find the page you are looking for</p>
                    <a href="/">back home</a>
                    `)
                } 
              })

server.listen(5000)