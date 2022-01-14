/*
The Nature of Code
2.1 Simulating Forces: Gravity and Wind 
https://www.youtube.com/watch?v=Uibl0UE4VH8
https://github.com/CodingTrain/website/blob/main/learning/nature-of-code/2.1_simulating_forces/ 
*/

// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 200);
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  let gravity = createVector(0, 0.2);
  mover.applyForce(gravity);

  mover.update();
  mover.edges();
  mover.show();//Draw the ball
}