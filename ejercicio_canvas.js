// JavaScript Document

//Creamos las variables globales que almacenan los objetos traídos de los formularios.

var color=document.getElementById("colors");

var area=document.getElementById("dibujito");

var start=document.getElementById("botoncito");
start.addEventListener("click", modalidad);

var cantidad=document.getElementById("line_number");

var section=document.getElementById("position");

var no=document.getElementById("noDibujar");

var forms=document.getElementById("hidden");

var lienzo= area.getContext("2d");

var ancho= area.width;
var borde= "darkblue";
var lineas= cantidad.value;
var posicion= section.value;
var dibujaForma=forms.value;

//[[ begin: comienzan funciones de dibujo

//Esta función ya la conocemos
function dibujarLineas(colorear, xInicial, yInicial, xFinal, yFinal){
	lienzo.beginPath();
	lienzo.strokeStyle=colorear;
	lienzo.moveTo(xInicial, yInicial);
	lienzo.lineTo(xFinal, yFinal);
	lienzo.stroke();
	lienzo.closePath();
	
}

//Función que dibuja un borde por defecto para resaltar el área de dibujo.

function dibujarBorde() {

	dibujarLineas(borde, 1, 1, 0, ancho-1);
	dibujarLineas(borde, 1,ancho-1, ancho-1, ancho-1);
	dibujarLineas(borde, ancho-1, ancho-1, ancho-1,  1);
	dibujarLineas(borde, ancho-1, 1, 1, 1);

}

//Función que se encarga de los métodos para dibujar la Torre Eiffel en distintas posiciones.

function dibujarPorClick(){
	//Impedimos la superposición por persistencia.
	  lienzo.clearRect(0,0, area.width, area.height);
	  
//Creamos dos condicionales para asegurarnos un comportamiento por defecto.
if(cantidad.value == "" || cantidad.value <= 0){
		cantidad.value= 1;
		alert('Nos estás probando?\n Dibujaremos una sola línea y a desgano.');
	}

if (color.value == "") {
		 color.value= "#000";
	   alert('Queeé aburridooo!\n Siempre de negrooo!!!');
   }
 
 //conviene declarar las variables una vez los condicionales han sido evaluados.  	
	var lineas= cantidad.value;
	var line=0;
	var space= ancho/lineas;
	var xFinal, yInicial, xOpuesta;
	var colorear= color.value;
	var posicion= section.value;

//Nueva serie de condicionales que resuelven las peticiones del usuario		 
	
if(posicion == "inf_izq"){
		
		for(line = 0; line < lineas; line++){
			
		xFinal= space*(line+1);
 		yInicial= space*line;
				
		dibujarLineas(colorear, 0,yInicial, xFinal, 300);
		
		
	}	
}
else if(posicion == "inf_der"){
       
	   for(line = 0; line < lineas; line++){
		 	
		xOpuesta= 300-(space*line);
 		yInicial= space*line;
				
		dibujarLineas(colorear, 300, yInicial, xOpuesta, 300);
		
		
	}
	  
}
else if(posicion == "sup_der"){
       
	    for(line = 0; line < lineas; line++){
		 
	
		xFinal= space*(line+1);
 		yInicial= space*line;
				
		dibujarLineas(colorear, 300,yInicial, xFinal, 0);
		
		
	}
}
else if(posicion == "sup_izq"){
	    
		for(line = 0; line < lineas; line++){
		
	
		xOpuesta= 300-(space*line);
 		yInicial= space*line;
				
		dibujarLineas(colorear, 0, yInicial, xOpuesta, 0);
		
		
	}
}
else{
	
	for(line = 0; line < lineas; line++){
		
	//Cambiamos el valor 10 por la variable espacio.	
	xFinal= space*(line+1);
 	yInicial= space*line;
 	xOpuesta= 300-(space*line);
	   
	   dibujarLineas(colorear, 0,yInicial, xFinal, 300);
	   dibujarLineas(colorear, 300,yInicial, xFinal, 0);
	   dibujarLineas(colorear, 300, yInicial, xOpuesta, 300);
	   dibujarLineas(colorear, 0, yInicial, xOpuesta, 0);
		
		}
	}
	
}

//Esta función se encarga de dibujar las formas geométricas. Básicamente se comporta como la anterior
function dibujarFormas() {
	
	lienzo.clearRect(0,0, area.width, area.height);
	  			
if (color.value == "") {
		 color.value= "#000";
	   alert('Queeé aburridooo!\n Siempre del mismo colorrrr!!!');
   }
		var colorear= color.value;
		var dibujaForma=forms.value;
	
if(dibujaForma == "cuadrado") {
	dibujarLineas(colorear, 49, 49, 249, 49);
	dibujarLineas(colorear, 249, 49, 249, 249);
	dibujarLineas(colorear, 249, 249, 49, 249);
	dibujarLineas(colorear, 49, 249, 49, 49);
}
else if (dibujaForma == "rectangulo") {
	
	dibujarLineas(colorear, 49, 99, 249, 99);
	dibujarLineas(colorear, 49, 199, 249, 199);
	dibujarLineas(colorear, 49, 99, 49, 199);
	dibujarLineas(colorear, 249, 99, 249, 199);
}

else if (dibujaForma == "triangulo")	{
	
	dibujarLineas(colorear, 149, 49, 40, 249);
	dibujarLineas(colorear, 149, 49, 260, 249);
	dibujarLineas(colorear, 40, 249, 260, 249);	
}

/*En el else introducimos un alert para no quedarnos sin respuesta en caso de que el usuario intente romper el programa.*/
else {
		alert('Bueno. Si tú no te decides por una forma,\n cómo pretendes que lo haga yo?');

	}
	
}

/*Este es el corazón de nuestra aplicación. La función que se encarga de llamar a las funciones con los métodos correspondientes dependiendo de la opción elegida por el usuario.*/
function modalidad() {
/*Creamos un condicional que verifica el estado de uno de los radio button del formulario. Si está activo inicia la función correspondiente. Sino sólo queda una opción posible. (Al menos para este ejemplo ;)*/
if (no.checked) {
	  dibujarFormas();
}
else {
		dibujarPorClick();
	}

/*Por último y muy importante. Relanzamos al final de cada ciclo el dibujo de borde pues el método clearRect de lo contrario nos dejaría todo en blanco hasta reiniciar el ciclo.	*/
	dibujarBorde();
}




//end: funciones de dibujo ]]
