// Dave Gray
 
//https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw   11:45
const os = require('os')
const path = require('path')
console.log(global);

const user = os.userInfo()

console.log("user: " + user);

console.log("type: " + os.type());
console.log("version: " + os.version());
console.log("homedir: " + os.homedir());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    homedir:  os.homedir(),
    uptime:  os.uptime()
  }
  console.log(currentOS);

  console.log("__dirname  =  " + __dirname);
  console.log("__filename =  " + __filename);

  console.log(" path.dirname = "+path.dirname(__filename))
  console.log(" path.basename = "+path.basename(__filename))
  console.log(" path.extname = "+path.extname(__filename))
  p = path.parse(__filename)
  console.log(" path.root = "+ p.root +"     path.dir  = " +p.dir)