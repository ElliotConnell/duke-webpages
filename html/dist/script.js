function confirmCode() {

  var choice = confirm('clicked button with JS function');
  
  if (choice == true){
    alert("You pressed OK!");
  }
  else{
    alert("Are you sure you want to cancel?");
  }

}

function changeColor() {
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  
  divElement1.className = "greenback";
  divElement2.className = "redback";
  
}

function changeText() {
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  
  divElement1.innerHTML = "Erste";
  divElement2.innerHTML = "Zweite";
}

function changeStyle() {
  var divElement1 = document.getElementById("div1");
  var divElement2 = document.getElementById("div2");
  
  divElement1.style.color = magenta;
  divElement2.style.colot = cyan;
}