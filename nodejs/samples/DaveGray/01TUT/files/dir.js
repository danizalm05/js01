// Read / Write  very big file   with Streams 
//https://www.youtube.com/watch?v=yQBw8skBdZU&list=PL0Zuz27SZ-6PFkIxaJ6Xx_X46avTM1aYw&index=2  
//24:15
// 
//https://nodejs.org/dist/latest-v17.x/docs/api/fs.html

/*  l. 
 * 
D:\js01\nodejs\samples\DaveGray\01TUT\files>
 */

 const fs = require('fs');
 const os = require('os');

 console.log("os.type() = ", os.type());
 console.log("os.version() = ", os.version());

 if(! fs.existsSync('./new')){  //  File does not exists
        fs.mkdir('./new', (err)=>{// Create  directory
           if(err) throw err;
           //console.log(global);
           console.log("Directory created");

       })
} 

if( fs.existsSync('./new')){
    fs.rmdir('./new', (err)=>{ //Delete the  directory
       if(err) throw err;
       console.log("Directory Removed");

   })
}//if
