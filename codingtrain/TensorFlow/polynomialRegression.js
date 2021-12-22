//16:00
//Coding Challenge #105: Polynomial Regression with TensorFlow.js
//  https://www.youtube.com/watch?v=tIXDik5SGsI&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=6
// https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_105_tf_polynomial_regression/P5
//https://www.tensorflow.org/js/
//            https://js.tensorflow.org/api/latest/
//Basic       https://js.tensorflow.org/api/latest/#layers.dense
//Models      https://js.tensorflow.org/api/latest/#sequential
//Operations  https://js.tensorflow.org/api/latest/#Operations

let x_vals = [];
let y_vals = [];

let a, b, c, d;
let dragging = false;
//Optimizers  https://js.tensorflow.org/api/0.6.1/#Training-Optimizers
//            https://js.tensorflow.org/api/latest/#train.sgd
const learningRate = 0.01;
//const optimizer = tf.train.sgd(learningRate);
const optimizer = tf.train.adam(learningRate);
function setup() {
  createCanvas(400, 400);
// tf.scalar =Creates rank-0 tf.Tensor (scalar) with the provided
// https://js.tensorflow.org/api/0.6.1/#scalar
// m and b are changing accorrding to mouse click so they must be varibles
// https://js.tensorflow.org/api/0.6.1/#variable
  a = tf.variable(tf.scalar(random(-1, 1)));
  b = tf.variable(tf.scalar(random(-1, 1)));
  c = tf.variable(tf.scalar(random(-1, 1)));
  d = tf.variable(tf.scalar(random(-1, 1)));
}//setup

function predict(x) {
  const xs = tf.tensor1d(x);
  // y = mx + b;
//  const ys = xs.mul(m).add(b);

  //  y = ax^2 + bx + c
  //const ys = xs.square().mul(a).add(xs.mul(b)).add(c);

  // y = ax^3 + bx^2 + cx + d
  const ys = xs .pow(tf.scalar(3))
                .mul(a)
                .add(xs.square().mul(b))
                .add(xs.mul(c))
                .add(d);


  return ys;
}


function loss(pred, labels) {
  // The 'pred'  are the y's  from the predict function
  // The 'labels' are the actual Y values
  // (pred - labels)^2/n
// const loss = (pred, label) => pred.sub(label).square().mean();
  return pred
    .sub(labels)
    .square()
    .mean();
}//loss

function mousePressed() {
  dragging = true;
}

function mouseReleased() {
  dragging = false;
}
let addingPoint = false;
 /*function mouseDragged() {
  let x = map(mouseX, 0, width, -1, 1);
  let y = map(mouseY, 0, height, 1, -1);
  //  console.log(mouseX,' ',x)
  //    console.log(mouseY,' ',y)
  x_vals.push(x);
  y_vals.push(y);
}*/




function draw() {

  if (dragging) {
     let x = map(mouseX, 0, width, -1, 1);
     let y = map(mouseY, 0, height, 1, -1);
     x_vals.push(x);
     y_vals.push(y);
   } else {
     tf.tidy(() => {
       if (x_vals.length > 0) {
         const ys = tf.tensor1d(y_vals);
         optimizer.minimize(() => loss(predict(x_vals), ys));
       }
     });
   }

  background(0);
  stroke(255);
  strokeWeight(4);

  for (let i = 0; i < x_vals.length; i++) {
    let px = map(x_vals[i], -1, 1, 0, width);
    let py = map(y_vals[i], -1, 1, height, 0);
    point(px, py);
  }
  const curveX = [];
   for (let x = -1; x <= 1; x += 0.05) {
     curveX.push(x);
   }

   const ys = tf.tidy(() => predict(curveX));
   let curveY = ys.dataSync();
  ys.dispose();

       //https://js.tensorflow.org/api/latest/#tidy
    //  tf.tidy()  automatic memory cleanup.
  //  let lineY = ys.dataSync();// Translate  tensor to a number
    //dataSync Synchronously downloads the values from the tf.Tensor.
     beginShape();
    noFill();
    stroke(255);
    strokeWeight(2)
    for (let i = 0; i < curveX.length; i++) {
       let x = map(curveX[i], -1, 1, 0, width);
       let y = map(curveY[i], -1, 1, height, 0);
       vertex(x, y);// specify  vertices   to draw a shape
     }
   endShape();


    //console.log(tf.memory().numTensors);//  Find number of tensor in memory

}//draw
