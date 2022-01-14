
// The Nature of Code
 
// Unit Vector (Normalize)
 
// https://youtu.be/ttz05d8DSOs
// https://github.com/CodingTrain/website/blob/main/learning/nature-of-code/1.5_unit_vector/P5/sketch.js 
// https://thecodingtrain.com/learning/nature-of-code/1.2-vector-math.html
// https://editor.p5js.org/codingtrain/sketches/U4ezFLIZ

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);
  let pos = createVector(200, 200);
  let mouse = createVector(mouseX, mouseY);
  let v = p5.Vector.sub(mouse, pos);

  // let m = v.mag();
  // v.div(m);

  // v.normalize();
  // v.mult(50);

  v.normalize().mult(50);

  // v.setMag(50);

  translate(width / 2, height / 2);
  strokeWeight(4);
  stroke(255);
  line(0, 0, v.x, v.y);
} 