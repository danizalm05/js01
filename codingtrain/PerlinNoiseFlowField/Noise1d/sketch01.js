
// The Nature of Code
// file:///home/user/Desktop/d/js/codingtrain/PerlinNoiseFlowField/Noise1d/index.html
// https://www.youtube.com/watch?v=y7sgcFhk6ZM&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=5
//
var start = 0;
var inc = 0.01;
var xoff1 = 0; 
var xoff2 = 1000;  
function setup() {
  createCanvas(400,400);
 }
function draw() {
  background(51);
  stroke(255);
  var x00 = random(400);
  var x01 = map(noise(xoff1),0,1,0,width);
  var y01 = map(noise(xoff2),0,1,0,height);
  
  
  xoff1 += 0.02;
  xoff2 += 0.02;
  ellipse(x00,200,25,25)
  ellipse(x01,y01,25,25)
  
  
  //noLoop();
 }
