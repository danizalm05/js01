//081-ReadLine-module.js 
// https://www.youtube.com/watch?v=RLtyhwFtXQA   22:32
 
 
const readline = require('readline')
/*
rl = readline.createInterface(process.stdin, process.stdout);
rl.question('What is your age? ', (age) => {
    console.log('Your age is: ' + age);
});*/
const rl = readline.createInterface(
              { input  : process.stdin,
                output : process.stdout

}); 
let num1 = Math.floor((Math.random() * 10) + 1); 
let num2 = Math.floor((Math.random() * 10) + 1); 
let answer = num1 + num2;

rl.question(` What is ${num1} + ${num2} ? \n`,
       (userInput)=>{
           if(userInput.trim()== answer){//Correct answer
                 console.log("OK")
                 rl.close();//Emit the 'close' event
            }
            else{ //Wrong answer
              rl.setPrompt('Incorrect response, try again!!\n');
              rl.prompt();

            }
})

rl.on('close', () => { //Listener
    console.log('Correct!!!!')
  })


 