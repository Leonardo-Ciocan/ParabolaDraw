var canvas; 
var ctx;

function init(){
	canvas= document.getElementById("root");
	ctx = canvas.getContext("2d");
	draw();
	a_slider = document.getElementById("a_slider");
	a_slider.onchange = function(){	
		a=+a_slider.value;
		draw();
	};
}

function draw(){
	ctx.clearRect ( 0 , 0 , canvas.width , canvas.height );
	ctx.beginPath();
		ctx.strokeStyle="gray";
		ctx.moveTo(0,canvas.height/2);
		ctx.lineTo(canvas.width,canvas.height/2);
		ctx.stroke();

		ctx.moveTo(canvas.width/2,0);
		ctx.lineTo(canvas.width/2,canvas.height);
		ctx.stroke();
		ctx.strokeStyle="black";
	ctx.closePath();
	draw_focus();
	draw_directrix();
	draw_pos_curve();
}

var a = 5;
var maxWidth=600;

var last_point = {x:600,y:250};
function draw_pos_curve(){
	last_point = {x:600,y:250};
	for(var x = canvas.width/2 ; x < canvas.width;x++){
		var pt = { x : x , y : canvas.height/2-Math.sqrt(4*a*(x-600))};
		if(pt.y<canvas.height/2){
			ctx.beginPath();
				ctx.strokeStyle= "black";
				ctx.lineWidth=1;
				ctx.moveTo(last_point.x,last_point.y);
				ctx.lineTo(pt.x,pt.y);
				ctx.stroke();
				last_point = pt;
			ctx.closePath();
		}
	}

	last_point = {x:600,y:250};
	draw_neg_curve();
}

function draw_neg_curve(){
	for(var x = canvas.width/2 ; x < canvas.width;x++){
		var pt = { x : x , y : canvas.height/2+Math.sqrt(4*a*(x-600))};
		if(pt.y>canvas.height/2){
			ctx.beginPath();
				ctx.strokeStyle= "black";
				ctx.lineWidth=1;
				ctx.moveTo(last_point.x,last_point.y);
				ctx.lineTo(pt.x,pt.y);
				ctx.stroke();
				last_point = pt;
			ctx.closePath();
		}
	}
}

function draw_directrix(){
	ctx.beginPath();
		ctx.strokeStyle="green";
		ctx.lineWidth=3;
		ctx.moveTo(canvas.width/2-a,0);
		ctx.lineTo(canvas.width/2-a,canvas.height);
		ctx.stroke();
	ctx.closePath();
}

function draw_focus(){
	ctx.beginPath();
	console.log(canvas.width/2+a);
		ctx.fillStyle="red";
		ctx.arc(canvas.width/2 + a,canvas.height/2,5,0,Math.PI*2);
		ctx.fill();
	ctx.closePath();
}