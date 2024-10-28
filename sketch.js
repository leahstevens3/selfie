let faceSize = 250;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  translate(width/2, height/2);
  
  // Hair
  fill(93, 55, 33);
  circle(0, 0, 300);
  fill(93, 55, 33);
  circle(0, 0, 300);
  rect(-145, -30, 293, 293);
  
  // Face
  fill(241, 211, 205);
  ellipse(0, 0, faceSize, faceSize);
  
   // Bangs
  fill(93, 55, 33);
  noStroke();
  ellipse(0, -100, 210, 60);
  stroke(1);
  
  // Eyebrows
  fill(93, 55, 33)
  arc(20, -65, 100, 10, PI + QUARTER_PI, TWO_PI);
   arc(-70, -65, 100, 10, PI + QUARTER_PI, TWO_PI);
    
  // Eyes
  let xEye = 40;
  let yEye = 30;
   fill(0);
  ellipse(-xEye, -yEye, 55, 55);
  ellipse(xEye, -yEye, 55, 55);
  fill(255);
  ellipse(-xEye, -yEye, 50, 50);
  ellipse(xEye, -yEye, 50, 50);
  fill(93, 55, 33)
  ellipse(-xEye, -yEye, 25, 25);
  ellipse(xEye, -yEye, 25, 25);

  // Nose
  fill(0);
  arc(-5, 30, 30, 10, 170, PI + HALF_PI);
 
  
  // Mouth
  noFill();
  strokeWeight(5);
  arc(0,70, 80, 30, 0, 15);
  strokeWeight(1);
}