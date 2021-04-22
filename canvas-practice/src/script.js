function changeColor() {
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  
  divElement1.className = "blueback";
  divElement1.className = "orangeback";
}

function changeColor() {
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  
  divElement1.className = "greenback";
  divElement2.className = "redback";
  
}

function doRed(red) {
  var canvas = document.getElementById("div1");
  
  canvas.style.backgroundColor = "red";
  
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  
}

function doBlue(blue) {
  var canvas = document.getElementById("div1");
  
  canvas.style.backgroundColor = "blue";
  
  var context = canvas.getContext("2d");
  
  context.fillStyle = "yellow";
  context.fillRect(10,10,60,60);
  context.fillRect(80,10,60,60);
  
  context.fillStyle = "black";
  context.font = "20px Arial";
  context.fillText("Hello", 15, 45);
  
  
}