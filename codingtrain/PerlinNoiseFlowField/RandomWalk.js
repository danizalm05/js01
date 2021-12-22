//https://www.youtube.com/watch?v=l__fEY1xanY&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=9  
//https://github.com/nature-of-code/noc-examples-p5.js/blob/master/chp00_introduction/NOC_I_01_RandomWalkTraditional/sketch.js
let walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(127);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor(){
    this.x = width/2;
    this.y = height/2;
  }

  render() {
    stroke(0);
    point(this.x,this.y);
  }

  step() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }
}
 