var numSquares = 6;

var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var pickedcolor = pickColor();
colordisplay.textContent = pickedcolor;


for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset(numSquares);

	});
}
function reset(numSquares){
	colors = generateRandomColors(numSquares);
	pickedcolor = pickColor();
	colordisplay.textContent = pickedcolor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
	else{
		squares[i].style.display = "none";
	}
	}
	h1.style.backgroundColor = "steelblue";
	}



// easybtn.addEventListener("click", function() {
// 	numSquares = 3;
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	colors = generateRandomColors(numSquares);
// 	pickedcolor = pickColor();
// 	colordisplay.textContent = pickedcolor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });
// hardbtn.addEventListener("click", function() {
// 	numSquares = 6;
// 	hardbtn.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	colors = generateRandomColors(numSquares);
// 	pickedcolor = pickColor();
// 	colordisplay.textContent = pickedcolor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
		
		
// 	}
// });


resetButton.addEventListener("click", function(){
	// colors = generateRandomColors(numSquares);
	// pickedcolor = pickColor();
	// colordisplay.textContent = pickedcolor;
	// this.textContent = "New Colors";
	// messageDisplay.textContent = "";

	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
	reset(numSquares );
	});



for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedcolor);
			h1.style.backgroundColor = clickedcolor;

		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}


    });
		
}
function changeColors(color){
	for(var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}
function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor()); 
	}


	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


                