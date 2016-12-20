var button;
score = 0

function setup() {
  createCanvas(400, 300);
  button = createButton("Click Me");
  button.position(width / 2, height / 2);
  button.mousePressed(randomLocation)
}

function draw() {}



function randomLocation() {
  background(random(255), random(255), random(255));
  button.position(random(width), random(height));
  textSize(20);
  text("score: " + score, 10, 30);
  fill('black');
  score = score + 1
  if (score > 15) {
    textSize(20);
    text("Winner ", 200, 150)
  }
}