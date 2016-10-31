var xpos=50
var ypos=50
var xdir=10
var ydir=1

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(100);
  fill(50)
  text("Happy Halloween",150,150);///text is not showing
}

function draw() {
  background(220)
  textSize(120)
  text("🎃",xpos,ypos)
  fill('rgb(100%,0%,10%)')
  xpos= xpos + xdir;
  ypos= ypos + ydir;
  if (xpos >= windowWidth || xpos <= 25) {
    xdir= xdir * -1
  }
  if (ypos >= windowHeight || ypos <= 25) {
    ydir= ydir * -1
  }
  if (mouseIsPressed) {
  textSize(120);
  text("👻",xpos,ypos)
  
  }
}