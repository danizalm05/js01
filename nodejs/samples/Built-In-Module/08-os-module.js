///08-os-module.js
//https://github.com/john-smilga/node-express-course/blob/main/01-node-tutorial/08-os-module.js
// https://www.youtube.com/watch?v=Oe421EPjeBE   57:00
 const os = require('os')

// info about current user
const user = os.userInfo()
console.log("user = ",user)
console.log("os.constants= ",os.constants)
 
// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)