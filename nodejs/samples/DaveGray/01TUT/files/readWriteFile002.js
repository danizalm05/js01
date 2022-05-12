//fsPromises   (file system  Second  version)
//https://www.youtube.com/watch?v=yQBw8skBdZU&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=2
//20:00
//https://nodejs.org/dist/latest-v17.x/docs/api/fs.html

/*  learn  how to avoid "callback hell"  by using fsPromises. 
 * 
D:\js01\nodejs\samples\DaveGray\01TUT\files>
 */



const fsPromises = require('fs').promises;
const path = require('path');


 

fileName = path.join(__dirname,'starter.txt')
startfileName = path.join(__dirname,'starter.txt')
promisefileName = path.join(__dirname,'promisefile.txt')
 
reNamePromiseFile  = path.join(__dirname,'reNamePromiseFile')

const fileOps = async() => {
    try{
        const data = await fsPromises.readFile(fileName,'utf8');
        console.log(data);
        await fsPromises.unlink(startfileName);//delete 'starter.txt'. Error if isn't exist
        await fsPromises.writeFile(promisefileName,data);
        await fsPromises.appendFile(promisefileName,"\nAppended data  123");
        await fsPromises.rename(promisefileName, reNamePromiseFile);
        const newdata = await fsPromises.readFile(reNamePromiseFile,'utf8');
        console.log(newdata);
    } catch (err){
        console.error(err)
    } 
}//fileOps
 

fileOps();