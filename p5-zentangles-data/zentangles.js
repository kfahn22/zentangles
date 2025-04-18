class Zentangles {
  constructor(spacing, data) {
    this.spacing = spacing;
    this.cols = floor(width / this.spacing);
    this.rows = floor(height / this.spacing);
    this.shape = new Shape();
    this.data = data;
  }


  determineAngle(x, y, ang, xadj, yadj) {
    let angle;
    if (x < width * xadj && y < height * yadj) {
      angle = ang;
    } else if (x >= width * xadj && y < height * yadj) {
      angle = -ang;
    } else if (x < width * xadj && y > height * yadj) {
      angle = -ang;
    } else if (x >= width * xadj && y > height * yadj) {
      angle = ang;
    }
    return angle;
  }

  chooseShape(x, y, choice, params, r) {
    let a = params.a;
    let b = params.b;
    let m = params.m;
    let n1 = params.n1;
    let n2 = params.n2;
    let n3 = params.n3;
    let n = params.n;
    let ang = radians(params.shapeAngle);
    let xadj = params.splitX;
    let yadj = params.splitY;
    let angle = this.determineAngle(x, y, ang, xadj, yadj);
    let tr = params.translate;
    //console.log(angle)
    switch (choice) {
      case "arc":
        push();
        this.shape.arc(x, y, r, tr, a, angle);
        pop();
        break;
      case "astroid":
        push();
        this.shape.astroid(x, y, r, tr, a, b, angle);
        pop();
        break;
      case "bicorn":
        push();
        this.shape.bicorn(x, y, r, angle);
        pop();
        break;
      case "butterfly":
        push();
        this.shape.butterfly2(x, y, r, angle);
        pop();
        break;
      case "cassiniOval":
        push();
        // 0.7, 1
        this.shape.cassiniOval(x, y, r, a, b, angle);
        pop();
        break;
      case "cornuSpiral":
        this.shape.cornuSpiral(x, y, r, a, n, angle);
        break;
      case "clover":
        this.shape.clover(x, y, r, tr, n, angle);
        break;
      case "craniod":
        // 1, 3, 0
        this.shape.craniod(x, y, r, a, b, m, angle);
        break;
      case "chrysanthemum":
        this.shape.craniod(x, y, r, 0.5, 0);
        break;
      case "deltoid":
        this.shape.deltoid(x, y, r, angle);
        break;
      case "eight":
        this.shape.eight(x, y, r, angle);
        break;
      case "flower":
        this.shape.flower(x, y, r, tr, a, m, angle);
        break;
      case "gear":
        this.shape.gear(x, y, r, tr, a, b, m, angle);
        break;
      case "heart":
        this.shape.heart(x, y, r, angle);
        break;
      case "kiss":
        // 2, 1
        this.shape.kissCurve(x, y, r, tr, a, b, angle);
        break;
      case "knot":
        this.shape.knot(x, y, r, angle);
        break;
      case "lissajous":
        //4, 3.6, 8;
        // -1, 2, 3, -PI/4
        this.shape.lissajous(x, y, r, a, b, m, angle);
        break;
      case "malteseCross":
        // 3, 2
        this.shape.malteseCross(x, y, r, a, b, angle);
        break;
      case "pinwheel":
        // 2, 1
        this.shape.pinwheel(x, y, r, tr, 2, 1, 0);
        break;
      case "polygon":
        this.shape.polygon(x, y, r, tr, m, angle);
        break;
      case "rose":
        // 7, 5
        this.shape.rose(x, y, r, tr, a, m);
        break;
      case "quadrifolium":
        this.shape.quadrifolium(x, y, r, m);
        break;
      case "spiral":
        // 0.75, 0.5
        // 0.1, 1
        this.shape.spiral(x, y, r, a, n, angle);
        break;
      case "superellipse":
        // 1, 2, 2
        this.shape.superellipse(x, y, r, tr, a, b, m, angle);
        break;
      case "supershape":
        this.shape.supershape(x, y, r, tr, a[0], b[0], m[0], n1[0], n2[0], n3[0], angle);
        break;
      case "tearDrop":
        // PI/6
        this.shape.tearDrop(x, y, r, angle);
        break;
      case "zigzag":
        // 1.5, 1
        this.shape.zigzag(x, y, r, a, n, angle);
        break;
    }
  }

  // show() {
  //   for (let i = 0; i < this.cols; i++) {
  //     for (let j = 0; j < this.rows; j++) {
  //       let params = this.data[i][j].shape;
  //       let choice = params.shapeName;
  //       let n = params.repeat;
  //       let shapeScale = params.shapeScale;
  //       let x = i * this.spacing;
  //       let y = j * this.spacing;
  //       for (let k = 0; k < n; k++) {
  //         //let a = 1 / pow(k, 0.5);
  //         let a = 1 / exp(k / 3);
  //         let r = a * shapeScale * this.spacing;
  //         this.chooseShape(x, y, choice, params, r);
  //       }
  //     }
  //   }
  // }

  showUpperLeft(midC, midR) {
    for (let i = midC; i >=0; i--) {
      for (let j = midR; j >=0; j--) {
        let params = this.data[i][j].shape;
        let choice = params.shapeName;
        let n = params.repeat;
        let shapeScale = params.shapeScale;
        let x = i * this.spacing;
        let y = j * this.spacing;
        for (let k = 0; k < n; k++) {
          //let a = 1 / pow(k, 0.5);
          let a = 1 / exp(k / 3);
          let r = a * shapeScale * this.spacing;
          this.chooseShape(x, y, choice, params, r);
        }
      }
    }
  }
  showLowerLeft(midC, midR) {
    for (let i = 0; i < midC+1; i++) {
      for (let j = this.rows-1; j > midR; j--) {
        let params = this.data[i][j].shape;
        let choice = params.shapeName;
        let n = params.repeat;
        let shapeScale = params.shapeScale;
        let x = i * this.spacing;
        let y = j * this.spacing;
        for (let k = 0; k < n; k++) {
          //let a = 1 / pow(k, 0.5);
          let a = 1 / exp(k / 3);
          let r = a * shapeScale * this.spacing;
          this.chooseShape(x, y, choice, params, r);
        }
      }
    }
  }

  showUpperRight(midC, midR) {
    for (let i = this.cols- 1; i > midC; i--) {
      for (let j = 0; j < midR+1; j++) {
        let params = this.data[i][j].shape;
        let choice = params.shapeName;
        let n = params.repeat;
        let shapeScale = params.shapeScale;
        let x = i * this.spacing;
        let y = j * this.spacing;
        for (let k = 0; k < n; k++) {
          //let a = 1 / pow(k, 0.5);
          let a = 1 / exp(k / 3);
          let r = a * shapeScale * this.spacing;
          this.chooseShape(x, y, choice, params, r);
        }
      }
    }
  }
  showLowerRight(midC, midR) {
    for (let i = this.cols - 1; i > midC; i--) {
      for (let j = this.rows - 1; j > midR; j--) {
        let params = this.data[i][j].shape;
        let choice = params.shapeName;
        let n = params.repeat;
        let shapeScale = params.shapeScale;
        let x = i * this.spacing;
        let y = j * this.spacing;
        for (let k = 0; k < n; k++) {
          //let a = 1 / pow(k, 0.5);
          let a = random(0.9, 1.1) / exp(k / 3);
          let r = a * shapeScale * this.spacing;
          this.chooseShape(x, y, choice, params, r);
        }
      }
    }
  }

  show() {
    let midC = floor(this.cols / 2) - 1;
    let midR = floor(this.rows / 2) - 1;
    this.showUpperLeft(midC, midR);
    this.showUpperRight(midC, midR);
    this.showLowerLeft(midC, midR);
   this.showLowerRight(midC, midR);
  }
}
