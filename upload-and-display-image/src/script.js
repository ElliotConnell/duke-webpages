function upload() {
  //get input from text input
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;
  alert("You chose " + filename);
  var image = new SimpleImage(fileinput);
  var canvas = document.getElementById("can");
  // Draw image on canvas
  image.drawTo(canvas);
}