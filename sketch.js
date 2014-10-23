var song

function preload() {
  song = loadSound('b.m4a')
}

function setup() {
  createCanvas( displayWidth, displayHeight )
  background(0)
  song.play()
}

function draw() {
  ellipse(20, 20, 20, 20)
  ellipse(width/2, height/2, 20, 20)
  ellipse(width/2+20, height/2+20, 20, 20)
}