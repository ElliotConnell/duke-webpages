var fileinput = document.getElementById("finput");
var image = new SimpleImage(fileinput);

function upload() {
  //get input from text input
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;
  alert("You chose " + filename);
  image = new SimpleImage(fileinput);
  var canvas = document.getElementById("can");
  // Draw image on canvas
  image.drawTo(canvas);
}

// write your code here
function makeGray() {
  //image = new SimpleImage(fileinput);
  for (var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    var imgcanvas = document.getElementById("can");
    image.drawTo(imgcanvas);
}