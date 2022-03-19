//https://www.youtube.com/watch?v=NhTrnam-awY&list=PLP-UKVDk32JjYp8Q0xYeRnRejgXhh5egT&index=3
//www.youtube.com/watch?v=1WRmmIb4JeI&list=PLP-UKVDk32JjYp8Q0xYeRnRejgXhh5egT&index=5
// ProgrammingKnowledge
 
//https://www.youtube.com/watch?v=tcQclvrf2dc&list=PLS1QulWo1RIb8IwHYfah5pxGU5jgNiEbK&index=5 
let cats = require("./cars");
let Cat = cats.Cat;

// creates some cats
let cat1 = new Cat("Manny",12);
let cat2 = new Cat("Lizzie",22);

cat1.showName()
cat2.showName()
// Let's find out the names and ages of cats in the class
console.log("There are two cats in the class, " + cat1.name + " and " + cat2.name + ".");
console.log("Manny is " + cat1.age + " years old " +  " and Lizzie is " + cat2.age + " years old.")