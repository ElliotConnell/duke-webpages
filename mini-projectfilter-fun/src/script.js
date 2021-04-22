var fileInput;
var canvas;
var baseImage = null;
var grayImage1 = null;
var redImage2 = null;
var sepiaImage3 = null;
var rainbowImage4 = null;
var blurImage5 = null;
var newImg = null;

function loadImage() {
  //get input from text input
  fileInput = document.getElementById("finput");
  baseImage = new SimpleImage(fileInput);
  grayImage1 = new SimpleImage(fileInput);
  redImage2 = new SimpleImage(fileInput);
  sepiaImage3 = new SimpleImage(fileInput);
  rainbowImage4 = new SimpleImage(fileInput);
  blurImage5 = new SimpleImage(fileInput);
  canvas = document.getElementById("can");
  // Draw image on canvas
  baseImage.drawTo(canvas);
}

function isImageLoaded(image){
  if (image == null || !image.complete()) {
    return false
  }
  else {
    return true
  }
}

function turnGray() {
  if (isImageLoaded(grayImage1)) {
    makeGray();
    canvas = document.getElementById("can");
    grayImage1.drawTo(canvas);
  }
}

function makeGray() {
  for (var pixel of grayImage1.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function turnRed() {
  if (isImageLoaded(redImage2)) {
    makeRed();
    canvas = document.getElementById("can");
    redImage2.drawTo(canvas);
  }
}

function makeRed() {
  
  for (var pixel of redImage2.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
    
    if (avg <= 128) {
      pixel.setRed(avg*2);
      pixel.setGreen(0);
      pixel.setBlue(0);
      }
    else {
      pixel.setRed(255);
      pixel.setGreen((avg*2)-255);
      pixel.setBlue((avg*2)-255);
    }
  }
}

function turnRainbow() {
  alert("Rainbow filter has been turned on")
}

function turnSepia() {
  if (isImageLoaded(sepiaImage3)) {
    makeSepia();
    canvas = document.getElementById("can");
    sepiaImage3.drawTo(canvas);
  }
}

function makeSepia() {
  for (var pixel of sepiaImage3.values()) {
        var red = pixel.getRed();
        var green = pixel.getGreen();
        var blue = pixel.getBlue();
        
        var tr = (0.393*red)+(0.769* green)+(0.189*blue);
        var tg = (0.349*red)+(0.686* green)+(0.168*blue);
        var tb = (0.272*red)+(0.534* green)+(0.131*blue);
        
        // If tr > 255 then r = 255 else r = tr
        if (tr > 255) {
            pixel.setRed(255);
        }
        if (tr <= 255) {
            pixel.setRed(tr);
        }        
        // If tg > 255 then g = 255 else g = tg
        if (tg > 255) {
            pixel.setGreen(255);
        }
        if (tg <= 255) {
            pixel.setGreen(tg);
        }
        // If tb > 255 then b = 255 else b = tb
        if (tb > 255) {
            pixel.setRed(255);
        }
        if (tb <= 255) {
            pixel.setBlue(tb);
        }        
    }
}

function turnRainbow() {
  if (isImageLoaded(sepiaImage3)) {
    makeRainbow();
    canvas = document.getElementById("can");
    rainbowImage4.drawTo(canvas);
  }
}

function makeRainbow() {
  for (var pixel of rainbowImage4.values()) {
    var height = rainbowImage4.getHeight();
    var segment = height/7;
    var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen())/3;
    var yValue = pixel.getY();
    
    // set top segment to red
    if (yValue < segment){
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }
    }
    // set second segment to orange
    if ((yValue >= segment) && (yValue < segment*2)) {
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg - 51);
        pixel.setBlue(2*avg-255);
      }
    }
    // set third segment to yellow
    if ((yValue >= segment*2) && (yValue < segment*3)) {
      if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
        }
      else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
    // set fourth segment to green
    if ((yValue >= segment*3) && (yValue < segment*4)) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
      }
    }
    // set fifth segment to blue
    if ((yValue >= segment*4) && (yValue < segment*5)) {
      if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else {
        pixel.setRed(2*avg-255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
    // set sixth segment to indigo
    if ((yValue >= segment*5) && (yValue < segment*6)) {
      if (avg < 128) {
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else {
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
    // set seventh segment to violet
    if (yValue >= segment*6) {
      if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
      }
      else {
        pixel.setRed(0.4*avg+153);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(0.4*avg+153);
      }
    }
  }

}

function turnBlur() {
  if (isImageLoaded(blurImage5)) {
    makeBlur();
    canvas = document.getElementById("can");
  }
}

function makeBlur() {
  var newImg = new SimpleImage(blurImage5.getWidth(), blurImage5.getHeight());
  for (var pixel of blurImage5.values()) {
    var x = pixel.getX();
    var y = pixel.getY();
    if (Math.random() < 0.5) {
      newImg.setPixel(x, y, pixel);
    }
    else {
      var random = Math.floor(Math.random()*23-11);
      var newX = random + x;
      var newY = random + y;
      if (newX > 0 && newX <= blurImage5.getWidth()-1){
        if (newY > 0 && newY <= blurImage5.getHeight() -1) {
          var newPixel = blurImage5.getPixel(newX, newY);
          newImg.setPixel(x, y, newPixel);
        }
      }
    }
  }
  newImg.drawTo(canvas)
}

function clearImage() {
  if (isImageLoaded(baseImage)) {
    loadImage()
  }
  alert("Image has been reset")
}

