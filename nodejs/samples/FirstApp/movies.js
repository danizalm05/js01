 
class  MyClass{
   constractor(_name, _rank){
    this.name = _name;
    this.rank = _rank;
    console.log( `Name is ${this.name} Rank ${this.rank}   old!` );
  
   }//constractor
  
   showName(){
      console.log( `My name is ${this.name} and I am ${this.rank} years old!` );
   }//showName
}//MyClass

module.exports = MyClass;

/* 
module.exports = function (_name, _rank){
 this.name = _name;
 this.rank = _rank;
 this.showName = function(){
    console.log( "The  ",  this.name , "has ",   this.rank  );
 }//this.showName
}  
   */

