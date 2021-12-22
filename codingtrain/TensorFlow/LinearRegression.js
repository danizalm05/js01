//35:00
//Coding Challenge #104: Linear Regression with TensorFlow.js
// https://www.youtube.com/watch?v=dLp10CFIvxI&list=PLRqwX-V7Uu6YIeVA3dNxbR9PYj4wV31oQ&index=5
//https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_104_tf_linear_regression/P5

//https://www.tensorflow.org/js/
//         https://js.tensorflow.org/api/latest/
//Basic    https://js.tensorflow.org/api/latest/#layers.dense
//Models   https://js.tensorflow.org/api/latest/#sequential


let x_vals = [];
let y_vals = [];

let m, b;

//Optimizers  https://js.tensorflow.org/api/0.6.1/#Training-Optimizers
const learningRate = 0.5;
const optimizer = tf.train.sgd(learningRate);

function setup() {
  createCanvas(400, 400);
// tf.scalar =Creates rank-0 tf.Tensor (scalar) with the provided
// https://js.tensorflow.org/api/0.6.1/#scalar
// m and b are changing accorrding to mouse click so they must be varibles
// https://js.tensorflow.org/api/0.6.1/#variable
  m = tf.variable(tf.scalar(random(1)));
  b = tf.variable(tf.scalar(random(1)));

}//setup

function predict(x) {
  const xs = tf.tensor1d(x);
  // y = mx + b;
  const ys = xs.mul(m).add(b);
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

  let x = map(mouseX, 0, width, 0, 1);
  let y = map(mouseY, 0, height, 1, 0);
  //  console.log(mouseX,' ',x)
  //    console.log(mouseY,' ',y)
  x_vals.push(x);
  y_vals.push(y);
}


function draw() {

  tf.tidy(() => {
    if (x_vals.length > 0) {
      const ys = tf.tensor1d(y_vals);//Tanslate y_val to  tansor
      optimizer.minimize(() => loss(predict(x_vals), ys));
    }
  });

  background(0);
  stroke(255);
  strokeWeight(4);

  for (let i = 0; i < x_vals.length; i++) {
    let px = map(x_vals[i], 0, 1, 0, width);
    let py = map(y_vals[i], 0, 1, height, 0);
    point(px, py);
  }

    const lineX = [0, 1];

    const ys = tf.tidy(   () => predict(lineX)   );
    //https://js.tensorflow.org/api/latest/#tidy
    //  tf.tidy()  automatic memory cleanup.
    let lineY = ys.dataSync();// Translate  tensor to a number
    //dataSync Synchronously downloads the values from the tf.Tensor.
    ys.dispose();// Disposes tf.Tensor from memory. 


Disposes any tf.Tensors found within the provided object.

    let x1 = map(lineX[0], 0, 1, 0, width);
    let x2 = map(lineX[1], 0, 1, 0, width);

    let y1 = map(lineY[0], 0, 1, height, 0);
    let y2 = map(lineY[1], 0, 1, height, 0);

    strokeWeight(2);
    line(x1, y1, x2, y2);


    // console.log(tf.memory().numTensors);//  Find number of tensor in memory

}//draw
