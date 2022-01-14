
//  What is a Vector? - The Nature of Code
//www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=5
// https://www.youtube.com/watch?v=bKEaK7WNLzM&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=10 
//https://github.com/CodingTrain/website/tree/main/learning/nature-of-code
var start = 0;
var inc = 0.02;

function setup() {
  createCanvas(400,400);
 }
function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape();
  var xoff = start;
  //console.log(xoff);
   for (var x=0;x < width; x++){
	    stroke(255);
	    y = sin(xoff) * height; 	//y = sin(xoff) * height;
	    vertex(x, y)
        xoff += inc;
   }
  endShape();
  start += inc;
  
  //noLoop();
 }
