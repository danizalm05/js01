 // 2.5 Database Query  
 // This is the SERVER    side
// npm instal  nedb
 //https://www.youtube.com/watch?v=q-lUgFxwjEM
 //To start  run:    'nodemon queryDB.js '
// https://github.com/CodingTrain/Intro-to-Data-APIs-JS/tree/source/module2/05_querying_database 
//NeDB: https://github.com/louischatriot/nedb
//      https://github.com/louischatriot/nedb#creatingloading-a-database
//https://expressjs.com/
 //https://expressjs.com/en/guide/routing.html
 //3:00
 
 // 

  
const express = require("express");
const Datastore = require("nedb");

const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("module2/05_querying_database"));//location of the index
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("database.db");
database.loadDatabase();

app.get("/api", (request, response) => {
  //find is the 'query'  opreation. 'find({}...' means find all object
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.send(data);
  });
});

app.post("/api", (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});