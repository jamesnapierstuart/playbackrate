var song

function preload() {
  // Load a sound file
  song = loadSound('b.m4a');
}

function setup() {
  createCanvas( displayWidth, displayHeight )
  background(0)
  song.play()
}

function draw() {
  ellipse(20, 20, 20, 20)
}