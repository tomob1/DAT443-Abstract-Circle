let slider;
let colorPicker;
//let backgroundPicker;
var particles = []
var colors = ["#3DB2FF", "#FF73464c", "#FFab5675", "#FFee6a7c", "#185ADB", "#0A1931", "#99154E"]

var n, s, maxR
let img, img2, img3, img4;

/*if (mousePressed) {
  initParticles = false;
} else {
  createCanvas = true;
}*/


function preload() {
img = loadImage('assets/backgrounds/backgroundgeometric.png')
//img2 = loadImage('assets/backgrounddiamonds.png')
//img3 = loadImage('assets/backgroundcircles.png')
//img4 = loadImage('assets/zenbackground.png')

}

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(220, height + -420);

  //backgroundPicker = createColorPicker('FFab5675');
  //backgroundPicker.position(180, height + -500);
  initCanvas()
  text('Use this to change the colour of the spiral', 130, 375)


    



}
 /* slider = createSlider(5, 50, 20, 1);
  slider.position(10, 10);
  slider.style('width', '80px');

}
*/

/*function mousePressed() {
  img.resize(50, 100);
}*/


function draw() {
  translate(width / 2, height / 2)
  noStroke()


  

  if (s > 1) {
    if (particles.length != 0) {
      for (let i = 0; i < particles.length; i++) {
        var p = particles[i]
        p.show()
        p.move()

        if (p.isDead()) particles.splice(i, 1)
      }
    } else {
      s -= 2
      initParticles()

      image(img, -1000, -500);

      //let val = slider.value();
      //background(val, 100, 100, 100);

    }
  }
}





function initParticles() {
  var c = colors[int(random(colors.length))]



  for (let i = 0; i < n; i++) {
    particles.push(new Particle(maxR, s, c))
  }
}

function initCanvas() {
  //background(backgroundPicker.color())
  smooth()
  particles = []
  n = 150
  s = 20
  maxR = height / 2 - height / 10
}

function keyPressed() {
  if (keyCode === ENTER
  ) {
    background(backgroundPicker.color())
  }
}


class Particle {

  constructor(maxR_, s_, c_) {
    this.s = s_
    this.c = c_
    this.maxR = maxR_

    this.life = 100

    this.init()
  }

  init() {
    this.pos = p5.Vector.random2D()
    this.pos.normalize()
    this.pos.mult(random(2, maxR))

    this.vel = createVector()
  }

  show() {
    fill(colorPicker.color())
    ellipse(this.pos.x, this.pos.y, this.s, this.s)
    this.life -= 1
  }

  move() {
    var angle = noise(this.pos.x / 400, this.pos.y / 400) * TAU

    this.vel.set(cos(angle), sin(angle))
    this.vel.mult(0.3)
    this.pos.add(this.vel)
  }


  isDead() {
    var d = dist(this.pos.x, this.pos.y, 0, 0)

    if (d > this.maxR || this.life < 1) return true
    else return false
  }



}

