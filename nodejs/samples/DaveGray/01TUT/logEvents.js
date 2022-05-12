//Node Events Tutorial
//  Directory: D:\js01\nodejs\samples\DaveGray\01TUT
//https://www.youtube.com/watch?v=2vaTy4dkbJM&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=4 
//6:40
const { format } = require('date-fns') ;
const {v4: uuid} = require('uuid');
const fs = require('fs') ;
const fsPromises = require('fs').promises;
const path = require('path');


const logEvents = async(message) => {
   const dateTime =`${format(new Date(),' yyyy-MM-dd\tHH:mm:ss')}`;
   const logItem = `${dateTime}\t${ uuid()}\t${message}\n`;
   console.log(logItem);
   try{
       if(!fs.existsSync(path.join(__dirname,'logs')) ){//logs directory does not  exists
        await fsPromises.mkdir(path.join(__dirname,'logs'));

       }
       await fsPromises.appendFile(path.join(__dirname,'logs', 'eventlog.txt'), logItem);
 
   }catch(err){
           console.log(err)
   }
}//logEvents


module.exports = logEvents
//console.log("date-fns: Demo");
////console.log(format(new Date(),' yyyy-MM-dd\tHH:mm:ss'))
//console.log("uuid  =  ", uuid())
 
 


