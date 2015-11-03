function TitleScene()
{
	this.title = "Title Scene";
}

TitleScene.prototype = new Scene();


TitleScene.prototype.render = function(ctx)
{
	ctx.clearRect(0,0,2000,2000);
  	ctx.font = "48px serif";
  	ctx.fillText(this.title, 10, 50);
}
TitleScene.prototype.sceneStart = function()
{
		console.log("sceneStart");
}

TitleScene.prototype.sceneStop = function()
{
		console.log("sceneStop");
}

TitleScene.prototype.update = function()
{
		console.log("update Title Scene");
}

