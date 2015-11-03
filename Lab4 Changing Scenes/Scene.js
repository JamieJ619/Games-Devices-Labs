var title;
var nextScene;

function Scene()
{
}

Scene.prototype.startScene = function()
{
	console.log("Start Scene");
}
Scene.prototype.stopScene = function()
{
	console.log("Stop Scene");
}
Scene.prototype.updateScene = function()
{
	console.log("Update Scene");
}
Scene.prototype.render = function(ctx)
{
	this.render(ctx);
}
