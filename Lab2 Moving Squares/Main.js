//Global Vars
var game;

function main()
{
	console.log("Test");

	game = new Game();
	game.test();
	game.gameLoop();

	window.addEventListener("keydown", game.keyInputDown);
}
