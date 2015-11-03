var canvas;
var ctx; 

touchable = 'createTouch' in document;
var touches;

var img = new Image();   // Create new img element
img.src = 'myImage.png'; // Set source path

function Game()
{
	initCanvas();
}

function initCanvas()
{
	canvas= document.createElement("canvas");
	//ctx is the context that we will draw on
	ctx= canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

Game.prototype.gameLoop = function()
{
	
}
