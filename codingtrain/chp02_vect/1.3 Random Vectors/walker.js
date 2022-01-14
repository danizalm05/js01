 // A Vector Math
 
// https://youtu.be/jupjuq9Jl-M
// https://thecodingtrain.com/learning/nature-of-code/1.2-vector-math.html
//  
// Random Vector: https://editor.p5js.org/codingtrain/sketches/qHKMdpRR
// Walker: https://editor.p5js.org/codingtrain/sketches/_HHLfcGx

class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
	 
    // this.vel = createVector(1, -1);
    this.vel = p5.Vector.random2D();//Random angle 2D unit vector   
   //A static function. The name of the calss itself is used 
   // (p5.Vector.)instad of a spacific instance.  
//   of
   this.vel.mult(random(3));//Scale the vector by factor [0:3]
	   //The bigger the scale the ball moves  faster
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32);
  }
}