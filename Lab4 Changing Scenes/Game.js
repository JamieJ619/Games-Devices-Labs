var canvas;
var ctx; 

var titleScene;
var menuScene;

var checkIfPressed = false;
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

	sceneManager = new SceneManager();
	titleScene = new TitleScene();
	sceneManager.addScene(titleScene);
	menuScene = new MenuScene();
	sceneManager.addScene(menuScene);
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
	if (mouseIsPressed && checkIfPressed == false) 
	{
		sceneManager.nextScene();
		checkIfPressed = true;
	}
	else if (!mouseIsPressed) 
	{
		checkIfPressed = false;
	}

	sceneManager.updateCurrentScene(ctx);
	sceneManager.renderCurrentScene(ctx);
}
