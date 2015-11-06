// window.addEventListener('load', initControl, false);

var canvas = document.getElementById("clickCanvas");
var ctx = canvas.getContext("2d");

var image = new Image()
// image.src = 'images/bay360Sprint.png';
image.src = 'http://i.imgur.com/BfY4QW5.png';

var frames = 100;
var bottomFrame = 18;
var currentFrame;
var currentFrame = 18;
var click = false;
var width = 109;
var height = 81.75;
var B;
var ALPHA;
var DIFF = 0;

// ctx.clearRect(0, 0, width, height);
ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
// ??WHy currentFram * height??


function initControl() {
	var X = [];
	var DELTA; 

	// var ALPHA2 =
	canvas.addEventListener("mousedown", doMouseDown, false);

	function doMouseDown (event) {
		X[0] = event.pageX;
		canvas.addEventListener("mousemove",mouseX, false);
		//set initial X == currentMouse Location
		

		document.body.addEventListener("mouseup", mouseUp, false);
		
	};	
	function mouseUp(event) {
		// document.body.removeEventListener("mouseup", mouseUp, false);
	  canvas.removeEventListener("mousemove",mouseX, false);
	  console.log("alpha2 -> " + ALPHA2);
	};



	function mouseX (event) {
	    // event.preventDefault();
	    var canvasX = event.pageX;
	    X[1] = canvasX;
	    console.log("hey Dude");
	    //code for marker Graphic Here.

	  	A = ALPHA;
	  	DIFF = X[0] - X[1];
	  	ALPHA = DIFF;
	  	B = ALPHA;

	  			if (B < A){

	  	  		if (currentFrame === frames ) {
	  	  			currentFrame = 18;
	  	  		} currentFrame++;
	  	  	} console.log("currentFrame1 = " + currentFrame)
	  	  	if (B > A) {
	  	  		if (currentFrame < bottomFrame ) {//or TRY 1 here...> see helmetLoop
	  	  			currentFrame = frames;
	  	  		} currentFrame--;
	  	  		
	  	  	} 
	  	  	var ALPHA2 = ALPHA;	
	  	  	
	  	  	ctx.clearRect(0, 0, width, height);
	  	  	ctx.drawImage(image, 0, height * currentFrame, width, height, 0, 0, width, height);
	  	  	
	  	  	//WHATS THIS???
	  	  	X[1] = X[0];////
	  // }

	}

}
