
var canvasArea = document.getElementById("areaDeDibujo");
var lienzo = canvasArea.getContext("2d");
var x;
var y;
var estadoMouse = 0;

console.log(canvasArea);
canvasArea.addEventListener("mousedown", funcionIniMouse);
canvasArea.addEventListener("mousemove", funcionMoviMouse);
canvasArea.addEventListener("mouseup", funcionEndMouse);




function dibujarlineas(color, xinicial, yinicial, xfinal, yfinal,lienzo){
	// canvas crear linea
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
function funcionIniMouse(evento){
	//inicio punto
	console.log(evento.movementX);
	estadoMouse = 1;
	x = evento.clientX;
	y = evento.clientY;
	
}
function funcionMoviMouse(eventoMovimiento){
	if(estadoMouse == 1){
		dibujarlineas("red", x, y, eventoMovimiento.clientX, eventoMovimiento.clientY, lienzo);
		x = eventoMovimiento.clientX;
		y = eventoMovimiento.clientY;
	}
}
function funcionEndMouse(eventoSoltar){
	// cuando suelta
	console.log(eventoSoltar)
	estadoMouse = 0;

}

	


