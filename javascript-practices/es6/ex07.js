/**
 *  class Rect
 */

class Rect {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    draw() {
        console.log(`Rect(w=${this.w}, height=${this.h})를 그렸습니다.`);
    }
}


// test
const r01 = new Rect(10, 20);
const r02 = new Rect(100, 200);

r01.draw();
r02.draw();


/**
 *  cf. constructor function Circle
 */
const Circle = function (x, y, r) {
    this.x = y;
    this.y = y;
    this.r = r;
}
Circle.prototype.draw = function () {
    console.log(`Circle(x=${this.x}, y=${this.y}, radius=${this.r})를 그렸습니다.`);
}

const c01 = new Circle(10, 20, 10);
const c02 = new Circle(1, 2, 5);

c01.draw();
c02.draw();

/**
 *  extends
 *  
 */
class Shape {
    constructor(bg, ln) {
        this.bg = bg;
        this.ln = ln;
    }
    draw() {
        console.log("도형을 그릴 수 없습니다.");
    }
    area() {
        console.log("area를 구할 수 없습니다.");
    }
}

class Trianlge extends Shape {
    constructor(w, h) {
        super('red', 'black');
        this.w = w;
        this.h = h;
    }
    // @Override
    draw() {
        console.log(`Trianlge(w=${this.w}, h=${this.h}, bg=${this.bg}, ln=${this.ln})를 그렸습니다.`);
    }
}

const t1 = new Trianlge(5, 5);
t1.draw();
t1.area();