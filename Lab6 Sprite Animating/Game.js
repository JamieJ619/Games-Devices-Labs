var canvas;
var ctx; 

var xPos;
var yPos;
var imageWidth;
var imageHeight;

var counter;
var counter2;
var currentFrame;
var counterFrame2;

var img= new Image();
var img2 = new Image();
img2.src = "resources/image.png";
img.src="resources/image.png";

function Game()
{
	initCanvas();
	this.xPos = 10;
	this.yPos = 10;
	this.imageWidth = 277;
	this.imageHeight = 70;

	counter = 0;
	counter2 = 0;
	currentFrame = 0;
	currentFrame2 = 0;
 	this.lastUpdate = Date.now();
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
	window.requestAnimationFrame(game.gameLoop);
    var now = Date.now();
    var dt = now - this.lastUpdate;
    lastUpdate = now;
	counter+= dt;
	counter2+= dt;
	if (counter > 20) 
	{
		counter = 0;
		this.currentFrame ++;
		if (this.currentFrame >= 4) 
		{
			this.currentFrame = 0;
		}
	}
	if (counter2 > 50) 
	{
		counter2 = 0;
		this.currentFrame2 ++;
		if (this.currentFrame2 >= 4) 
		{
			this.currentFrame2 = 0;
		}
	}


	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(img, currentFrame*70, 0, 69, 70, 10, 10, 70, 70);
	ctx.drawImage(img2, currentFrame2*70, 0, 69, 70, 10, 100, 70, 70);
	console.log(this.yPos, this.xPos)
}
