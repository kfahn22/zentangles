//  zentangles attempt

let cols, rows;
let img;
let spacing = 40;
let zen;
let imageChoice, shapes;
let choice;
let data;

function preload() {
  loadJSON("data.json", (loadedData) => {
    data = loadedData;
    choice = data.fish;
    img = loadImage(choice.img);
  });
}

function setup() {
  cols = img.width;
  rows = img.height;
  let shapes = choice.shapes;
  
  createCanvas(spacing * cols, spacing * rows);
  data = dataArray(img, shapes);
  zen = new Zentangles(spacing, data);
   background(255);
   stroke(0);
   translate(spacing / 2, spacing / 2);
   zen.show();
   noLoop()
}

function draw() {
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
        data[i][j] = {
          shape: shapes.shape0,
        };
      } else if (r < 50) {
        data[i][j] = {
          shape: shapes.shape1,
        };
      } else if (r >= 50 && r < 140) {
        data[i][j] = {
          shape: shapes.shape2,
        };
       } else if (r >= 140 && r < 200) {
        data[i][j] = {
          shape: shapes.shape3,
        };
      }
    }
  }
  //console.log(data)
  return data;
}

function mousePressed() {
  save("zentangles.jpg");
}
