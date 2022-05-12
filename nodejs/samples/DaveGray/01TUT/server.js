// Dave Gray
//https://www.youtube.com/watch?v=JZXQ455OT3A&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=2
//https://nodejs.org/dist/latest-v17.x/docs/api/


const os = require('os')
const path = require('path')
const math = require('./math')// imporent from a local js file
const {add, sub, mul, div } = require('./math') // Anothere way to use add


console.log("\n\n  \n------  global  ------\n\n" + global);
console.log(global);


const user = os.userInfo()

console.log("\n\n  \n------   user ------\n\n"  +  user);

console.log("\n\n  \n--------$$$$$$$$$$$$$$$$$$$-----------\n\n"  +  user);

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


  console.log("\n\nmath.add(3,5) = " + math.add(3,5))
  console.log("add(3,5) = " + add(3,5))

  console.log("mul(3,5) = " + mul(3,5))