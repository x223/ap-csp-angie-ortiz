var strokeColor='black'
var weight= 10

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(10);
  fill(51)
  text("Key 'b'= Black", 10, 30);
  textSize(10);
  fill('#006B3C')
  text("Key 'g'= Green", 10, 40);
  textSize(10);
  fill('#E32173');
  text("Key 'p'= Pink", 10, 50);
  textSize(10);
  fill('rgb(100%,0%,10%)')
  text("Key 'r'= Red", 10, 60);
  textSize(10);
  fill(255, 204, 0);
  text("Key 'y'= Yellow", 10, 70);
  textSize(10);
  fill(0, 102, 153);
  text("Key 'e'= Eraser", 10, 80);
}

function draw() {

  if (mouseIsPressed) {
  stroke(strokeColor);
  strokeWeight(weight);
  line(pmouseX,pmouseY, mouseX, mouseY);
  }
}

function keyTyped() {
  if (key === 'b') {
    strokeColor = 'black';
    weight=10
  } else if (key === 'p') {
    strokeColor = '#E32173';
    weight = 10
  } else if (key === 'g') {
    strokeColor= 'green';
    weight= 10
  } else if (key === 'r') {
    strokeColor= 'red';
    weight= 10
  } else if (key === 'y') {
    strokeColor= 'yellow';
    weight=10
  }  else if (key === 'e') {
      strokeColor= 'white';
      weight = 100
  } 
}

