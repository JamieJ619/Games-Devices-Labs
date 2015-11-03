var canvas;
var ctx; 

function main()
{
	console.log("Hello World");

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
	draw();
}

function draw()
{
	for (var i = 0; i <= 200; i++) 
	{
		
	
		ctx.fillStyle = rgb(Math.floor((Math.random() * 249) + 1)
			, Math.floor((Math.random() * 249) + 1)
			 ,Math.floor((Math.random() * 249) + 1));

		ctx.fillRect(Math.floor((Math.random() * canvas.width) + 1)
			,Math.floor((Math.random() * canvas.height) + 1)
			,10,10);

	};

	for (var i = 0; i <= 200; i++) 
	{
		
	
		ctx.fillStyle = rgb(Math.floor((Math.random() * 249) + 1)
			, Math.floor((Math.random() * 249) + 1)
			 ,Math.floor((Math.random() * 249) + 1));

		ctx.fillRect(Math.floor((Math.random() * canvas.width) + 1)
			,Math.floor((Math.random() * canvas.height) + 1)
			,100,10);

	};
	
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