var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var randomButton = document.getElementsByTagName("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";" ;

	randomButton[0].style.background = "linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")"; 
}

var randomColor = function() {
  var letters = '0123456789ABCDEF';
  var c1 = '#';
  var c2 = '#';
  for (var i = 0; i < 6; i++) {
    c1 += letters[Math.floor(Math.random() * 16)];
    c2 += letters[Math.floor(Math.random() * 16)];
  }

  body.style.background = 
	"linear-gradient(to right, " 
	+ c1
	+ ", " 
	+ c2 
	+ ")";

	css.textContent = body.style.background + ";" ;

	randomButton[0].style.background = "linear-gradient(to right, " 
	+ c1
	+ ", " 
	+ c2 
	+ ")"; 

    color1.setAttribute("value", c1);
    color2.setAttribute("value", c2);
} 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

