//Global Vars
var game;

function main()
{
	game = new Game();
	game.gameLoop();

	window.addEventListener( 'touchstart', game.onTouchStart );
    window.addEventListener( 'touchmove', game.onTouchMove );
    window.addEventListener( 'touchend', game.onTouchEnd );
}
