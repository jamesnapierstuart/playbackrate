var song

function preload() {
  // Load a sound file
  song = loadSound('b.m4a')
  touchStarted = true
}

function setup() {
  createCanvas( displayWidth, displayHeight )
  background(0)
  song.play()
}

function draw() {
  ellipse(20, 20, 20, 20)
  ellipse(width/2, height/2, 20, 20)
}