//Global Vars
var game;


function main()
{

	game = new Game();
	game.gameLoop();

	window.addEventListener("mousedown" , game.onmousedown);
	window.addEventListener("mouseup" , game.onmouseup);

}
