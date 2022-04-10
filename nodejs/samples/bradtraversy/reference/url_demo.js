//Url            D:\js01\nodejs\samples\bradtraversy\reference>
//https://www.youtube.com/watch?v=fBNz5xF-Kx4    42:35
//https://github.com/bradtraversy/node_crash_course/blob/master/reference/url_demo.js
//npm init
//npm install  uuid
//npm install  -D nodemon
//if  you delete node modules you can  rebuilld it by running:   npm install 


//https://nodejs.org/dist/latest-v16.x/docs/api/
//https://nodejs.org/dist/latest-v16.x/docs/api/url.html 
const url = require('url');
// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), line 1 gives errors,
*  if you get an error saying, TypeError: URL is not a constructor, 
*  comment line 1, and uncomment line 2 */

const myUrl = new URL('http://mywebsite.com/hello.html:3456?id=100&status=active');
console.log("\n\n\nmyUrl.href = "+myUrl.href);
console.log("myUrl.toString() = "+myUrl.toString());

// Host (root domain)
console.log("myUrl.host = " + myUrl.host);

// Hostname (does not get port)
console.log("myUrl.hostname:no port  = " + myUrl.hostname);

// Pathname
console.log("myUrl.pathname = " + myUrl.pathname);

// Serialized query
console.log("myUrl.search = " + myUrl.search);

// Params object
console.log("myUrl.searchParams = " + myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log("\n=======\nmyUrl.searchParams " + myUrl.searchParams);

// Loop through params
function ScanPar(value, name){
   console.log(" =|=|=\nname = " + `${name}: " value= " +  ${value}`)

}
myUrl.searchParams.forEach((value, name) => ScanPar(value, name));