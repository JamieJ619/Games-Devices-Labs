var canvas;
var ctx; 

var player;

function Game()
{
	player = new Player();
	player.initializeCanvas();
}
Game.prototype.test = function()
{
	console.log("test");

	//console.log(e.keyCode);
}

Game.prototype.keyInputDown = function(e)
{
	
	if(e.keyCode == 87)
	  player.moveUp();
	if(e.keyCode == 83)
	  player.moveDown();
	if(e.keyCode == 65)
	  player.moveLeft();
	if(e.keyCode == 68)
	  player.moveRight();
}

Game.prototype.gameLoop = function()
{
	console.log(this);
	player.update();
	//this.keyInputDown();
	window.requestAnimationFrame(game.gameLoop);
	//player.moveRight();
	draw();

}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}