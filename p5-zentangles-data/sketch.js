//  Zentangles generator

let cols, rows;
let img;
let spacing;
let zen;
let imageChoice, shapes;
let choice;
let data;
let options;

function preload() {
  loadJSON("data.json", (loadedData) => {
    data = loadedData;

    options = [
      data.bird,
      data.butterfly,
      data.flower,
      data.fish,
      data.maze,
      data.mountain,
      data.red_rocks,
      data.rose,
      data.swirl,
      data.squirrel,
      data.sunflower,
    ];
    let i = floor(random(options.length));
    choice = options[i];
    img = loadImage(choice.img);
  });
}

function setup() {
  randomSeed(42);
  cols = img.width;
  rows = img.height;
  spacing = choice.spacing;
  let shapes = choice.shapes;

  let canvas = createCanvas(spacing * cols, spacing * rows);
  canvas.position(
    (windowWidth - spacing * cols) / 2,
    (windowHeight - spacing * rows) / 2
  );
  data = dataArray(img, shapes);
  zen = new Zentangles(spacing, data);
  background(255);
  stroke(0);
  translate(spacing / 2, spacing / 2);
  zen.show();
  noLoop();
}

function draw() {}

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
