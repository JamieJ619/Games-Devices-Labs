var canvas;
var ctx; 

touchable = 'createTouch' in document;
var touches;

function Game()
{
	initCanvas();
	this.touches = new Array();
	if(touchable) 
	{
        canvas.addEventListener( 'touchstart', onTouchStart, false );
        canvas.addEventListener( 'touchmove', onTouchMove, false );
        canvas.addEventListener( 'touchend', onTouchEnd, false );
	}
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
Game.prototype.onTouchStart = function(e)
{
    touches = e.touches; 
     
} 

Game.prototype.onTouchMove = function(e)
{
     // Prevent the browser from doing its default thing (scroll, zoom)
    e.preventDefault();
    touches = e.touches; 
     
} 

var mouseIsPressed = 0;
document.body.onmousedown = function()
{
	mouseIsPressed = 1;
}

document.body.onmouseup = function() 
{
	mouseIsPressed = 0;
}

Game.prototype.gameLoop = function()
{
	window.requestAnimationFrame(game.gameLoop);
		    ctx.beginPath(); 
		    ctx.fillStyle = "white";
		    ctx.fillText(" x:"+50+" y:"+50, 30, 30); 
		    ctx.beginPath(); 
		    ctx.strokeStyle = "red";
		    ctx.lineWidth = "6";
		    ctx.arc(50, 20, 40, 0, Math.PI*2, true); 
		    ctx.stroke();
	if(touches != null)
	{
		for(var i=0; i<touches.length; i++)
		{
		    var touch = touches[i]; 
		    ctx.beginPath(); 
		    ctx.fillStyle = "white";
		    ctx.fillText(" x:"+touch.clientX+" y:"+touch.clientY, touch.clientX+30, touch.clientY-30); 
		    ctx.beginPath(); 
		    ctx.strokeStyle = "red";
		    ctx.lineWidth = "6";
		    ctx.arc(touch.clientX, touch.clientY, 40, 0, Math.PI*2, true); 
		    ctx.stroke();
		}
	}
	touches = new Array();
}
