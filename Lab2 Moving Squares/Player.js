//Global Vars
var canvas;
var ctx; 
var xPos = 0;
var yPos = 0;


function Player()
{
	
}

Player.prototype.initializeCanvas = function()
{
	canvas= document.createElement("canvas");
	//ctx is the context that we will draw on
	ctx= canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
}

Player.prototype.update = function()
{

	if (xPos + 30 >= 600 && yPos + 30 >= 0 && xPos <= 700 && yPos <= 100) 
	{
		console.log("You Win");
	};


	draw();
}

Player.prototype.moveLeft = function()
{
	xPos -= 5;
}
Player.prototype.moveRight = function()
{
	xPos += 5;
}
Player.prototype.moveUp = function()
{
	yPos -=5;
}
Player.prototype.moveDown = function()
{
	yPos +=5;
}

function draw()
{
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.fillRect(xPos,yPos,30,30);

	ctx.fillRect(600,0,100,100);

}