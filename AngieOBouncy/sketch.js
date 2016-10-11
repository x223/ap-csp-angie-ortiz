var xpos=50
var ypos=50
var xdir=10
var ydir=1

function setup() {
  createCanvas(windowWidth,windowHeight);  
}

function draw() {
  background('#fae');
  ellipse(xpos,ypos,50,50);
  ellipse(ypos,xpos,50,50)
  fill('rgb(100%,0%,10%)')
  xpos= xpos + xdir;
  ypos= ypos + ydir;
  if (xpos >= windowWidth || xpos <= 25) {
    xdir= xdir * -1
  }
  if (ypos >= windowHeight || ypos <= 25) {
    ydir= ydir * -1
  }
  
  
}