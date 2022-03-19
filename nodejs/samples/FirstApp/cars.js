// constructor function for the Cat class
class Cat {
 constructor(_name,_age) {
    this.age = _age;
    this.name = _name;
  }
  showName(){
    //console.log("Name " + this.name + " age   " +this.age)
    console.log(`Name  ${this.name}  age  ${this.age}`);

  } 
}

 
// now we export the class, so other modules can create Cat objects
module.exports = {
    Cat: Cat
}