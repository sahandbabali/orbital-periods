// to do
// size difference perhaps?
// change the accuracy for timings

let deg = 1;
let mercurydeg = 4.147;
let venusdeg = 1.622;
let marsdeg = 0.531;
let jupiterdeg = 0.083;
let saturnrdeg = 0.034;

let uranusdeg = 0.011;
let neptunedeg = 0.006;

let day = 0;
function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);
  frameRate(30);
}

function draw() {
  background("#2F3038");
  noFill();
  stroke(255, 255, 255, 150);
  strokeWeight(1);
  circle(width / 2, height / 2, 200);
  circle(width / 2, height / 2, 250);
  circle(width / 2, height / 2, 300);
  circle(width / 2, height / 2, 350);
  circle(width / 2, height / 2, 400);
  circle(width / 2, height / 2, 450);
  circle(width / 2, height / 2, 500);
  circle(width / 2, height / 2, 550);
  line(width / 2, height / 2, width / 2, 675);

  fill(255);
  textSize(32);
  text(day, 50, 50);

  if (day == 1) {
    text("Day", 50, 100);
  } else {
    text("Days", 50, 100);
  }

  drawsun();
  drawmercury();
  drawvenus();
  drawearth();
  drawmars();
  drawjupiter();
  drawsaturn();
  drawuranus();
  drawneptune();
  day += 1;
}

function drawsun() {
  fill("#F77D08");

  strokeWeight(2);
  stroke("yellow");
  circle(width / 2, height / 2, 50);
}

function drawmercury() {
  fill("#528FED");
  strokeWeight(4);
  stroke("#2F3038");
  push();

  translate(width / 2, height / 2);
  rotate(mercurydeg);
  translate(0, 100);
  circle(0, 0, 20);
  pop();
  mercurydeg += 4.147;
}

function drawvenus() {
  fill("#B66B22");
  strokeWeight(4);
  stroke("#2F3038");
  push();

  translate(width / 2, height / 2);
  rotate(venusdeg);
  translate(0, 125);
  circle(0, 0, 20);
  pop();
  venusdeg += 1.622;
}

function drawearth() {
  fill("#4DA6D7");
  strokeWeight(4);
  stroke("#2F3038");
  push();
  translate(width / 2, height / 2);
  rotate(deg);
  translate(0, 150);
  circle(0, 0, 20);
  pop();
  deg += 1;
}

function drawmars() {
  fill("#F17744");
  strokeWeight(4);
  stroke("#2F3038");
  push();

  translate(width / 2, height / 2);
  rotate(marsdeg);
  translate(0, 175);
  circle(0, 0, 20);
  pop();
  marsdeg += 0.531;
}

function drawjupiter() {
  fill("#B66725");
  strokeWeight(4);
  stroke("#2F3038");
  push();

  translate(width / 2, height / 2);
  rotate(jupiterdeg);
  translate(0, 200);
  circle(0, 0, 20);
  pop();
  jupiterdeg += 0.083;
}

function drawsaturn() {
  fill("#ECB869");
  strokeWeight(4);
  stroke("#2F3038");
  push();

  translate(width / 2, height / 2);
  rotate(saturnrdeg);
  translate(0, 225);
  circle(0, 0, 20);
  noFill();
  stroke(255, 255, 255, 110);
  strokeWeight(5);

  circle(0, 0, 20);

  pop();
  saturnrdeg += 0.034;
}

function drawuranus() {
  fill("#B8EDEE");
  strokeWeight(4);
  stroke("#2F3038");
  push();

  translate(width / 2, height / 2);
  rotate(uranusdeg);
  translate(0, 250);
  circle(0, 0, 20);
  pop();
  uranusdeg += 0.011;
}

function drawneptune() {
  fill("##3950DC");
  strokeWeight(4);
  stroke("#2F3038");
  push();

  translate(width / 2, height / 2);
  rotate(neptunedeg);
  translate(0, 275);
  circle(0, 0, 20);
  pop();
  neptunedeg += 0.006;
}
