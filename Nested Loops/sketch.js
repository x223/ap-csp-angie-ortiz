function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  fill('blue');

  // nested loop:
  y = 50;
  for (var x = 25; x < width; x = x + 50) {
    for (var y = 25; y < height; y = y + 50) {
      ellipse(x, y, random(100), random(100));
    }

  }
}