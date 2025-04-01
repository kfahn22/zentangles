class Zentangles {
  constructor(spacing, data) {
    this.spacing = spacing;
    this.cols = floor(width / this.spacing);
    this.rows = floor(height / this.spacing);
    this.shape = new Shape();
    this.data = data;
    this.repeat = 4;
  }

  chooseShape(i, j, r) {
    let x = i * this.spacing;
    let y = j * this.spacing;
    //let r = this.data[i][j].r * this.spacing;
    switch (this.data[i][j].shape) {
      case "astroid":
        push();
        this.shape.astroid(x, y, r, 1, 1, 0);
        pop();
        break;
      case "bicorn":
        push();
        this.shape.bicorn(x, y, r, -PI/3);
        pop();
        break;
      case "butterfly":
        push();
        this.shape.butterfly2(x, y, r, 0);
        pop();
        break;
      case "cassiniOval":
        push();
        this.shape.cassiniOval(x, y, r, 0.7, 1, 0);
        pop();
        break;
      case "cornuSpiral":
        this.shape.cornuSpiral(x, y, r, 2, 1, 0);
        break;
      case "clover":
        this.shape.clover(x, y, r, 4, 0);
        break;
      case "craniod":
        this.shape.craniod(x, y, r, 1, 3, 0);
        break;
      case "chrysanthemum":
        this.shape.craniod(x, y, r, 0.5, 0);
        break;
      case "deltoid":
        this.shape.deltoid(x, y, r, 0);
        break;
      case "eight":
        this.shape.eight(x, y, r, 0);
        break;
      case "flower":
        this.shape.flower(x, y, r, 2, 8);
        break;
      case "gear":
        this.shape.gear(x, y, r, 1, 6, 10, 0);
        break;
      case "heart":
        this.shape.heart(x, y, r, 0);
        break;
      case "kiss":
        this.shape.kissCurve(x, y, r, 2, 1, 0);
        break;
      case "knot":
        this.shape.knot(x, y, r, 0);
        break;
      case "lissajous":
        //4, 3.6, 8;
        this.shape.lissajous(x, y, r, -1, 2, 3, -PI/4);
        break;
      case "malteseCross":
        this.shape.amlteseCross(x, y, r, 3, 2, 0);
        break;
      case "pinwheel":
        this.shape.pinwheel(x, y, r, 2, 1, 0);
        break;
      case "polygon":
        this.shape.polygon(x, y, r, 6, 0);
        break;
      case "rose":
        this.shape.rose(x, y, r, 7, 5);
        break;
      case "quadrifolium":
        this.shape.quadrifolium(x, y, r, 4);
        break;
      case "spiral":
        // 0.75, 0.5
        // 0.1, 1
        this.shape.spiral(x, y, r, 0.75, 0.5, 0);
        break;
      case "superellipse":
        this.shape.superellipse(x, y, r, 1, 2, 2, 0);
        break;
      case "supershape":
        this.shape.supershape(x, y, r, 8, 0);
        break;
      case "tearDrop":
        this.shape.tearDrop(x, y, r, PI * 1/6);
        break;
      case "zigzag":
        this.shape.zigzag(x, y, r, 1.5, 1, 0);
        break;
    }
  }

  show() {
    
    
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        for (let k = 0; k< this.repeat; k++)
        {
          let a = 1/k;
          let r = a * this.data[i][j].r * this.spacing;
          this.chooseShape(i, j, r);}
      }
    }
  }
}
