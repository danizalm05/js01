/*
The Nature of Code
2.1 Simulating Forces: Gravity and Wind 
https://www.youtube.com/watch?v=Uibl0UE4VH8
https://github.com/CodingTrain/website/blob/main/learning/nature-of-code/2.1_simulating_forces/ 
*/
// https://editor.p5js.org/codingtrain/sketches/kYWcOmch

class Mover {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.r = 16;//Radios of the ball
  }
   
  applyForce(force) {
	 //force = createVector(a, b) 
    this.acc.add(force);
  }

  edges() {
	  //this.r radios of the ball
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}