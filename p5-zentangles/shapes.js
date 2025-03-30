// https://github.com/kfahn22/L-System-Pattern-Generator/blob/main/code/Shapes-playground/shapes.js

const e = 2.71828;

class Shape {
  constructor() {}

  arc(x, y, a, r, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < a * PI; theta += 0.05) {
      let v0 = r * cos(theta);
      let v1 = r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/astroid/astroid.shtml
  // https://mathworld.wolfram.com/Astroid.html
  astroid(x, y, r, a, b, angle) {
    push();
    translate(x, y);
    rotate(angle)
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let v0 = r * a * pow(cos(theta), 3);
      let v1 = r * b * pow(sin(theta), 3);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/bicorne/bicorne.shtml
  bicorn(x, y, r, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let v0 = r * sin(theta);
      let v1 = (r * pow(cos(theta), 2)) / (2 + cos(theta));
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // Butterfly curve equation from http://paulbourke.net/geometry/butterfly/
  butterfly(x, y, sc, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < 8 * PI; theta += 0.05) {
      let r =
        pow(e, sin(theta)) -
        2 * cos(4 * theta) +
        pow(sin((2 * theta - PI) / 24), 5);
      const v0 = sc * r * cos(theta);
      const v1 = -sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d/ornementales/ornementales.shtml
  butterfly2(x, y, sc, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < 2 * PI; theta += 0.01) {
      let r = -3 * cos(2 * theta) + sin(7 * theta) - 1;
      //let r = -this.a * cos(this.m * theta) + sin(this.d * theta) - 1;
      const v0 = r * sc * cos(theta);
      const v1 = -r * sc * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathworld.wolfram.com/topics/PlaneCurves.html
  cannibus(x, y, sc) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < PI; theta += 0.01) {
      let r =
        (1 + (9 / 10) * cos(8 * theta)) *
        (1 + (1 / 10) * cos(24 * theta)) *
        (9 / 10 + (1 / 10) * cos(200 * theta)) *
        (1 + sin(theta));
      const v0 = sc * r * cos(theta);
      const v1 = -sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathworld.wolfram.com/CassiniOvals.html

  cassiniOval(x, y, sc, a, b, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let root = sqrt(pow(b / a, 4) - pow(sin(2 * theta), 2));
      let r = pow(a, 2) * (cos(2 * theta) + root);
      let v0 = sc * r * cos(theta);
      let v1 = sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  ceva(x, y, r, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let v0 = r * (cos(3 * theta) + 2 * cos(theta));
      let v1 = r * sin(3 * theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // http://paulbourke.net/geometry/chrysanthemum/

  chrysanthemum(x, y, a, sc) {
    const N = 30000;
    push();
    translate(x, y);
    beginShape();
    for (let theta = 0; theta < N; theta += 1) {
      let u = (theta * 21.0 * PI) / N;
      let r =
        a *
        (5 * (1 + sin((11 * u) / 5)) -
          4 * pow(sin((17 * u) / 3), 4) * pow(sin(2 * cos(3 * u) - 28 * u), 8));
      let v0 = sc * r * cos(u);
      let v1 = sc * r * sin(u);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  //https://mathcurve.com/courbes2d/ornementales/ornementales.shtml

  clover(x, y, sc, m, angle) {
    push();
    translate(x, y);
    rotate(PI / 4);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let r = 1 + cos(m * theta) + pow(sin(m * theta), 2);
      let v0 = sc * r * cos(theta);
      let v1 = sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/cornu/cornu.shtml

  // https://virtualmathmuseum.org/Curves/clothoid/kappaCurve.html

  fresnelC(t) {
    let sum = 0;
    let n = 50;
    let dt = t / n;
    for (let i = 0; i < n; i++) {
      let u = i * dt;
      sum += cos((u * u) / 2) * dt;
    }
    return sum;
  }

  fresnelS(t) {
    let sum = 0;
    let n = 50;
    let dt = t / n;
    for (let i = 0; i < n; i++) {
      let u = i * dt;
      sum += sin((u * u) / 2) * dt;
    }
    return sum;
  }

  cornuSpiral(x, y, r, a, n, angle) {
    let numPoints = 200;
    let maxT = a * PI;
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let i = 0; i < numPoints; i++) {
      let t = map(i, 0, numPoints, -maxT, maxT);
      let v0 = n + r * this.fresnelC(t);
      let v1 = n + r * this.fresnelS(t);
      vertex(v0, v1);
    }
    endShape();
    pop();
  }

  // https://mathworld.wolfram.com/Cranioid.html
  craniod(x, y, a, b, m, angle) {
    let p = 0.75;
    let q = 0.75;
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let r =
        a * sin(theta) +
        b * sqrt(1 - p * pow(cos(theta), 2)) +
        m * sqrt(1 - q * pow(cos(theta), 2));
      let v0 = sc * r * cos(theta);
      let v1 = sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/deltoid/deltoid.shtml

  deltoid(x, y, sc, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    let a = 1;
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let v0 = sc * (4 * a * pow(cos(theta / 2), 2) * cos(theta) - a);
      let v1 = sc * (4 * a * pow(sin(theta / 2), 2) * sin(theta));
      this.points.push(createVector(v0, v1));
    }
  }

  eight(x, y, r, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let v0 = r * sin(theta);
      let v1 = r * sin(theta) * cos(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  
  // https://mathcurve.com/courbes2d.gb/croixdemalte/croixdemalte.shtml
  // malteseCross(x, y, r, a, b, angle) {
  //   push();
  //   translate(x, y);
  //   rotate(angle);
  //   beginShape();
  //   for (let theta = 0.1; theta < TWO_PI; theta += 0.05) {
  //     let v0 = r * cos(theta) * (pow(cos(theta), 2) - a);
  //     let v1 = r * b * sin(theta) * pow(cos(theta), 2);
  //     vertex(v0, v1);
  //   }
  //   endShape(CLOSE);
  //   pop();
  // }

  // https://thecodingtrain.com/challenges/55-mathematical-rose-patterns
  // changed to flower
  flower(x, y, sc, a, m, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.01) {
      let r = a + cos(m * theta);
      let v0 = sc * r * cos(theta);
      let v1 = sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathworld.wolfram.com/GearCurve.html
  // https://help.tc2000.com/m/69445/l/755460-hyperbolic-functions-table

  hyperbolicTan(theta) {
    let l = pow(e, 2 * theta);
    return (l - 1) / (l + 1);
  }

  gear(x, y, sc, a, b, m) {
    push();
    translate(x, y);
    beginShape();
    for (let theta = 0; theta < 2 * PI; theta += 0.025) {
      let r = a + (1 / b) * this.hyperbolicTan(b * sin(m * theta));
      let v0 = sc * r * sin(theta);
      let v1 = sc * r * cos(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // heart curve equation from https://mathworld.wolfram.com/HeartCurve.html
  // https://thecodingtrain.com/challenges/134-heart-curve

  heart(x, y, r, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < 2 * PI; theta += 0.1) {
      const v0 = 0.1 * r * 16 * pow(sin(theta), 3);
      const v1 =
        0.1 *
        -r *
        (13 * cos(theta) -
          5 * cos(2 * theta) -
          2 * cos(3 * theta) -
          cos(4 * theta));
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/bouche/bouche.shtml
  kissCurve(x, y, r, a, b, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let v0 = a * r * cos(theta);
      let v1 = b * r * pow(sin(theta), 3);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d/ornementales/ornementales.shtml

  knot(x, y, r, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = -2 * PI; theta < 2 * PI; theta += 0.1) {
      let v0 = 0.5 * r * (3 * sin(theta) + 2 * sin(3 * theta));
      let v1 = 0.5 * r * (cos(theta) - 2 * cos(3 * theta));
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/lissajous/lissajous.shtml
  // https://thecodingtrain.com/challenges/116-lissajous-curve-table

  lissajous(x, y, r, a, b, m) {
    push();
    translate(x, y);
    beginShape();
    for (let theta = -2 * PI; theta <= 2 * PI; theta += 0.01) {
      let v0 = r * sin(a * theta + m) + 1;
      let v1 = r * sin(b * theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/croixdemalte/croixdemalte.shtml
  malteseCross(x, y, r, a, b, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0.1; theta < TWO_PI; theta += 0.05) {
      let v0 = r * cos(theta) * (pow(cos(theta), 2) - a);
      let v1 = r * b * sin(theta) * pow(cos(theta), 2);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathworld.wolfram.com/Ophiuride.html

  ophiuride(x, y, sc, a, b) {
    push();
    translate(x, y);
    beginShape();
    for (let theta = (-PI * 1) / 2; theta < (PI * 1) / 2; theta += 0.05) {
      let r = (b * sin(theta) - a * cos(theta)) * tan(theta);
      let v0 = sc * r * cos(theta);
      let v1 = sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d/ornementales/ornementales.shtml
  pinwheel(x, y, sc, m, n, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.01) {
      let denom = 1 - 0.75 * pow(sin(m * theta), 2);
      let r = pow(sin(4 * theta) / denom, 0.5);
      let v0 = sc * r * cos(theta);
      let v1 = n * sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/rosace/rosace.shtml
  // https://thecodingtrain.com/challenges/55-mathematical-rose-patterns
  // https://editor.p5js.org/codingtrain/sketches/3kanFIcHd

  reduceDenominator(numerator, denominator) {
    function rec(a, b) {
      return b ? rec(b, a % b) : a;
    }
    return denominator / rec(numerator, denominator);
  }

  rose(x, y, sc, d, m) {
    push();
    translate(x, y);
    beginShape();
    let k = d / m;
    // let d = 8;
    // let n = 5;
    for (
      let theta = 0;
      theta < TWO_PI * this.reduceDenominator(d, m);
      theta += 0.02
    ) {
      let r = cos(k * theta);
      let v0 = sc * r * cos(theta);
      let v1 = sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  quadrifolium(x, y, r) {
    push();
    translate(x, y);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let v0 = r * (2 * pow(sin(theta), 2) * cos(theta));
      let v1 = r * (2 * pow(cos(theta), 2) * sin(theta));
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  polygon(x, y, r, m, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += TWO_PI / m) {
      let v0 = r * cos(theta);
      let v1 = r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/archimede/archimede.shtml
  // https://mathcurve.com/courbes2d.gb/spirale/spirale.shtml
  // this.n = 1 Archimedian Spiral
  // this.n = -1 Hyperbolic Spiral
  // this.n = 1/2 Fermat spiral
  // this.n = -1/2 Lituus spiral
  // this.n = 2 Galilean spiral
  spiral(x, y, sc, a, n, angle) {
    //let a = 0.1;
    let dir = -1;
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < 4 * PI; theta += 0.05) {
      let r = dir * a * pow(theta, n);
      let v0 = sc * r * cos(theta);
      let v1 = sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape();
    pop();
  }

  // https://thecodingtrain.com/challenges/19-superellipse

  // this.n = 0.5 astroid
  sgn(val) {
    if (val == 0) {
      return 0;
    }
    return val / abs(val);
  }

  superellipse(x, y, r, a, b, m, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.05) {
      let na = 2 / m;
      let v0 = r * pow(abs(cos(theta)), na) * a * this.sgn(cos(theta));
      let v1 = r * pow(abs(sin(theta)), na) * b * this.sgn(sin(theta));
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://thecodingtrain.com/challenges/23-2d-supershapes

  superformula(theta) {
    let a = 1;
    let b = 1;
    let m = 8;
    let n1 = 1;
    let n2 = 1;
    let n3 = 1;
    let part1 = (1 / a) * cos((theta * m) / 4);
    part1 = abs(part1);
    part1 = pow(part1, n2);
    let part2 = (1 / b) * sin((theta * m) / 4);
    part2 = abs(part2);
    part2 = pow(part2, n3);
    let part3 = pow(part1 + part2, 1 / n1);
    if (part3 === 0) {
      return 0;
    }
    return 1 / part3;
  }

  supershape(x, y, sc, angle) {
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta <= TWO_PI; theta += 0.05) {
      let r = this.superformula(theta);
      let v0 = sc * r * cos(theta);
      let v1 = sc * r * sin(theta);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/larme/larme.shtml

  tearDrop(x, y, r, angle) {
    let n = 4;
    push();
    translate(x, y);
    rotate(angle);
    beginShape();
    for (let theta = 0; theta < TWO_PI; theta += 0.1) {
      let v0 = r * cos(theta);
      let v1 = r * sin(theta) * pow(sin(theta / 2), this.m);
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }

  // https://mathcurve.com/courbes2d.gb/abdank/abdank.shtml

  zigzag(x, y, r, a, n) {
    push();
    translate(x, y);
    rotate(angle);
    for (let theta = -PI / 2; theta < a * PI; theta += 0.1) {
      let v0 = r * sin(theta);
      let v1 = ((r * pow(n, 2)) / 2) * (theta + sin(theta) * cos(theta));
      vertex(v0, v1);
    }
    endShape(CLOSE);
    pop();
  }
}