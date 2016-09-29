var xpos=1
var xdir=1
var ypos= 1
var ydir=1

function setup() {
  createCanvas(windowWidth,windowHeight);
}
function draw() {
  background('white');
  ellipse(xpos,windowHeight/2,50,50);
  fill('green');
  xpos= xpos+5 * xdir;
  //if(xpos >= windowWidth || xpos <= 0 ){
	//xpos = xpos * -1;
	//}
	//if(ypos >= windowHeight || y <= 0){
	//yposition = ypos * -1;
	}
  
