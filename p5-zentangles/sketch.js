//  zentangles attempt

let cols, rows;
let img;
let spacing = 50;
let zen;
let data;

function preload() {
  img = loadImage("assets/bird.png");
  // img = loadImage("assets/butterfly.png");
  // img = loadImage("assets/flower.png");
  // img = loadImage("assets/rose.png");
  // img = loadImage("assets/swirl.png");
}

// let shapeData = {
//   "shape": {

//   }
// }

function setup() {
  cols = img.width;
  rows = img.height;

  //let shapes = ["astroid", "supershape", "rose"]
  let shapes = ["spiral", "astroid", "tearDrop"];

  createCanvas(spacing * cols, spacing * rows);

  data = dataArray(img, shapes);
  zen = new Zentangles(spacing, data);
}

function draw() {
  background(255);
  stroke(0);
 translate(spacing/2, spacing/2);
  zen.show();
}

function dataArray(img, shapes) {
  let data = [];
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    data[i] = [];
    for (let j = 0; j < img.height; j++) {
      let index = (i + j * img.width) * 4;
      let r = img.pixels[index + 0];
      if (r >= 200) {
        data[i][j] = { t: 0, r: 0.25, shape: shapes[0] };
      } else if (r >= 20 && r < 200) {
        data[i][j] = { t: 1, r: 0.75, shape: shapes[1] };
      } else if (r < 20) {
        data[i][j] = { t: 2, r: 0.75, shape: shapes[2]};
      }
    }
  }
  return data;
}

function mousePressed() {
  save("zentangles.jpg");
}
