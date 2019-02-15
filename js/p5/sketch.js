var capture, cnv, cnvHere;

function setup() {
  cnvHere = document.getElementById('canvas-here');
  cnv = createCanvas(1000, 800);
  cnv.parent(cnvHere);
  capture = createCapture();
  capture.hide();

  noStroke();
  fill(108, 192, 136);
}

function draw() {
  background(250);
  capture.loadPixels();

  var stepSize = round(map(0.05, 0, 1, 10, 100));

  for (var y = 0; y < capture.height; y += stepSize) {
    for (var x = 0; x < capture.width; x += stepSize) {
      var i = y * capture.width + x;

      var darkness = (255, capture.pixels[i*4]) / 255;
      var radius = stepSize * darkness;

      ellipse(x, y, radius, radius);
    }
  }
}
