//Simple  http server

//https://www.youtube.com/watch?v=fBNz5xF-Kx4   01:11:12 
//https://github.com/bradtraversy/node_crash_course/blob/master/index.js
//npm install  uuid
//npm install  -D nodemon
//if  you delete node modules you can  rebuilld it by running:   npm install 
//https://nodejs.org/dist/latest-v16.x/docs/api/
//package-jason

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    
    // Build file path
   let filePath = path.join(  __dirname,  "public",
           req.url === "/" ? "index.html" : req.url
    );
   let extname = path.extname(filePath); // Extension of file

    let contentType = "text/html"; // Initial content type

    // Check ext and set content type
    switch (extname) {
     case ".js":
      contentType = "text/javascript";
      break;
     case ".css":
      contentType = "text/css";
      break;
     case ".json":
      contentType = "application/json";
      break;
     case ".png":
      contentType = "image/png";
      break;
     case ".jpg":
       contentType = "image/jpg";
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // log the filePath
  console.log(filePath);

 /////////////////////////////////////////////////
  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
}

);//

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));