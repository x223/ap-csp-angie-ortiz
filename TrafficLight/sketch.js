fill_color= 'red'
fill_color1= 'yellow'
fill_color2= 'green'


function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background('white');
  strokeWeight(2)
  stroke('black')
  fill('black')
  rect(115,10,70,160);
  if(mouseY<= windowHeight/3){
  fill(fill_color);
} else
  fill_color= 'white'
  ellipse(150,50,40,40);
  if(mouseY<= windowHeight/3){
  fill(fill_color1);
} else
  fill_color1= 'white'
  fill(fill_color1);
  ellipse(150,90,40,40);
  if(mouseY<= windowHeight/3){
  fill(fill_color2);
} else
  fill_color2= 'white'
  fill(fill_color2);
  ellipse(150,130,40,40);
}