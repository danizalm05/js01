//https://www.youtube.com/watch?v=OIBIXYLJjsI&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&index=2
//https://github.com/iamshaunjp/node-crash-course/blob/lesson-2/global.js
//5:49 9:26


console.log(global);

 // Output massage after 3 sec deley
 //global.setTimeout(() => {
 setTimeout(() => {
     console.log('in the timeout');
     clearInterval(int);
     }, 3000);

  
const int = setInterval(() => {
    console.log('in the interval');
  }, 1000);

console.log(__dirname);
console.log(__filename);

// no access to DOM methods
//console.log(document.querySelector);