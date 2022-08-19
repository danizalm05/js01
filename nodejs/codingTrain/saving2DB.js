 // 2.4 Saving to a Database - Working with Data and APIs in JavaScript 
 // This is the SERVER    side
// npm instal  nedb
 //https://www.youtube.com/watch?v=xVYa20DCUv0&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X&index=12
 
 //To start  run:    'nodemon saving2DB.js '
//https://github.com/CodingTrain/Intro-to-Data-APIs-JS/blob/source/module2/04_saving_to_database/index.js
 
//NeDB: https://github.com/louischatriot/nedb
//      https://github.com/louischatriot/nedb#creatingloading-a-database
//https://expressjs.com/
 //https://expressjs.com/en/guide/routing.html
 //08:20
const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('module2'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
});