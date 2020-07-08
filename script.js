var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var butn = document.querySelector("button");

console.log(butn);

body.style.background =
	 "linear-gradient(to right, " 
	 + color1.value 
	 + "," 
	 + color2.value 
	 + ")";

css.textContent = body.style.background + ";";


function setGradient()
{
	body.style.background =
	 "linear-gradient(to right, " 
	 + color1.value 
	 + "," 
	 + color2.value 
	 + ")";

	 css.textContent = body.style.background + ";";
}

function randomRGB()
{
	var r = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
	var g = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
	var b = Math.floor(Math.random() * (256 - 0 + 1)) + 0;
	var value =  "rgb(" + r + "," + g + "," + b + ")";
	return value;
}

function setRandomGradient()
{

	randomColor1 = randomRGB();
	randomColor2 = randomRGB();
	body.style.background =
	"linear-gradient(to right, " 
	+ randomColor1 
	+ "," 
	+ randomColor2
	+ ")"

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

butn.addEventListener("click", setRandomGradient);

