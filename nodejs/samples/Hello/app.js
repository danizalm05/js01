//https://www.youtube.com/watch?v=rnZAD-X9KVg&list=PLS1QulWo1RIb8IwHYfah5pxGU5jgNiEbK&index=8
//https://www.youtube.com/watch?v=Oe421EPjeBE

var http = require("http");

var port = 3000;
http.createServer(function (req, res) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
  
   var body ='This is  the body  of response';
   var content_length = body.length;
   res.writeHead(200,
         {
            'Content-Type': 'text/plain',
            'Content-Length': content_length
      
      });
   
   // Send the response body as "Hello World"
   res.end(body);
}).listen(port);

// Console will print the message
console.log("server is running on http://127.0.0.1:3000/")
//Open the browser on http://127.0.0.1:3000/ and you get the massage Hello World