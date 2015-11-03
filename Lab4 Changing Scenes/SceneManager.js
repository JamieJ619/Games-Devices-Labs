
function SceneManager()
{
	sceneList = new Array();
}

SceneManager.prototype.renderCurrentScene = function(ctx)
{
	currentScene.render(ctx);
}
SceneManager.prototype.updateCurrentScene = function()
{
	currentScene.update();
}

SceneManager.prototype.initCanvas = function()
{
	currentScene.initializeCanvas();
}

SceneManager.prototype.nextScene = function()
{
	var currIndex;
	for (var i = 0; i < sceneList.length; i++) 
	{
		if(sceneList[i] == currentScene)
		{
			currIndex = i;

			sceneList[i].sceneStop();
		}
	};
	if(currIndex + 1 < sceneList.length)
	{
		sceneList[currIndex + 1].sceneStart();
		currentScene = sceneList[currIndex + 1];
	}
	else
	{
		sceneList[0].sceneStart();
		currentScene = sceneList[0];
	}
}
SceneManager.prototype.addScene = function(scene)
{
	sceneList.push(scene);
	currentScene = sceneList[sceneList.length-1];
}

SceneManager.prototype.goToScene = function(title)
{
	for (var i = 0; i < sceneList.length; i++) 
	{
		if(sceneList[i].title == title)
		{
			currentScene = SceneList[i];
			currentScene.sceneStart();
		}
	};
}
