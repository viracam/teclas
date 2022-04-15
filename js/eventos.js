var teclas = {
	UP: 38,
	DOWN: 40,
	RIGHT: 39,
	LEFT: 37
};
console.log(teclas);

document.addEventListener('keydown', dibujarTeclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarlineas("red", x+1,y+1,x-1,y-1, papel);
function dibujarlineas(color, xinicial, yinicial, xfinal, yfinal, lienzo){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.lineWidth = 3;
	lienzo.moveTo(xinicial, yinicial);
	lienzo.lineTo(xfinal, yfinal);
	lienzo.stroke();
	lienzo.closePath();
}
function dibujarTeclado(evento){
	
	colorcito ="green";
	movimiento = 5;

	switch(evento.keyCode){
		
		case teclas.UP:
			dibujarlineas(colorcito, x, y, x, y - movimiento, papel);
			y = y - movimiento;
		break;
		case teclas.DOWN:
			dibujarlineas(colorcito, x, y, x, y + movimiento, papel);
			y = y + movimiento;
		break;
		case teclas.RIGHT:
			dibujarlineas(colorcito, x, y, x + movimiento, y, papel);
			x = x + movimiento;
		break;
		case teclas.LEFT:
			dibujarlineas(colorcito, x, y, x - movimiento, y, papel);
			x = x - movimiento;
		break;
		default:
		 console.log("otra tecla");
		 break;
	}

/*	
	if(evento.keyCode == teclas.UP){
		console.log("vamos para arriba");
	}
	if(evento.keyCode == teclas.DOWN){
		console.log("vamos para ABAJO");
	}
	if(evento.keyCode == teclas.LEFT){
		console.log("vamos para IzQUIERDA");
	}
	if(evento.keyCode == teclas.RIGHT){
		console.log("vamos para DERECHA");
	}*/
}
