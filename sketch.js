var song

function preload() {
  song = loadSound('b.m4a')
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  background(0)
  song.play()
}

function draw() {
  ellipse(20, 20, 20, 20)
  ellipse(width/2, height/2, 20, 20)
  ellipse(width/2+20, height/2+20, 20, 20)
  ellipse(width/2+200, height/2+20, 20, 20)
}

function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
        alert('landscape');
        break; 
      default:
        alert('portrait');
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);