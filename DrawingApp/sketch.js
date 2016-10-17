var strokeColor='black'
var weight= 10

function setup() {
  createCanvas(windowWidth,windowHeight);
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

