//File  system
//https://www.youtube.com/watch?v=fBNz5xF-Kx4    40:00
//https://github.com/bradtraversy/node_crash_course/blob/master/reference/os_demo.js 
 


//https://nodejs.org/dist/latest-v16.x/docs/api/
 
const os = require('os');

// Platform
var data = os.platform();
console.log("platform = " +data);

// CPU Arch
data = os.arch()
console.log("arcithcture = "+ data);

// CPU Core Info
console.log("CPU Core Info ======> ");
console.log(os.cpus());

// Free memory
console.log("Free memory = "+ os.freemem());

// Total memory
console.log("Total memory = " +os.totalmem());

// Home dir
console.log("Home dir = "+ os.homedir());

// Uptime
console.log("uptime = " +os.uptime()); 