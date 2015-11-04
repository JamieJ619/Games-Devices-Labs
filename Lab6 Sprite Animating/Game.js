var canvas;
var ctx; 

var xPos;
var yPos;
var imageWidth;
var imageHeight;

var counter;
var currentFrame;

var img= new Image();
img.src="resources/image.png";

function Game()
{
	initCanvas();
	this.xPos = 10;
	this.yPos = 10;
	this.imageWidth = 277;
	this.imageHeight = 70;

	counter = 0;
	currentFrame = 0;
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
	counter++;
	if (counter > 10) 
	{
		counter = 0;
		this.currentFrame ++;
		if (this.currentFrame >= 4) 
		{
			this.currentFrame = 0;
		}
	}

	ctx.clearRect(0,0,canvas.width,canvas.height);
//8 things
//currentframe * size of splice, 0, w , h, x, y, w,h 
	ctx.drawImage(img, currentFrame*70, 0, 69, 70, 10, 10, 70, 70);
	console.log(this.yPos, this.xPos)
	//ctx.drawImage(img, (69 * currentFrame),0,69, this.imageHeight,this.xPos, this.yPos, 100 ,80);
}
