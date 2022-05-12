// Read / Write  very big file   with Streams 
//https://www.youtube.com/watch?v=yQBw8skBdZU&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=2  20:15
// 
//https://nodejs.org/dist/latest-v17.x/docs/api/fs.html

/*  l. 
 * 
D:\js01\nodejs\samples\DaveGray\01TUT\files>
 */

const wr = (dataChunk) => ws.write(dataChunk);
 
const fs  = require('fs');
const  rs = fs.createReadStream("lorem.txt",{encoding:'utf8'});
const ws = fs.createWriteStream("new_lorem.txt");
rs.on(   'data',    (dataChunk =>{  wr(dataChunk); }     ))
 
const ws02= fs.createWriteStream("new_lorem03.txt");
rs.pipe(ws02); //The same as the above but more efficent
