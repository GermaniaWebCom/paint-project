// JavaScript Document

//Identificador de id para el input de saludo.
//[[ begin: saludo al visitante
function capturar(){
       //Vamos a obtener el nombre por el atributo class
	   var visitante=document.getElementsByClassName("presentarse")[0].value;
	   //Vamos a imprimir el nombre. CUIDADO si utilizan innerHtml. Tiene vulnerabilidades de seguridad.
	   document.getElementById("bienvenida").textContent=" \
	   Hoy dibujamos con: "+ visitante + ".";
	   //De forma muy simple coloco un mensaje por default si el visitante es igual a vacío.
	  if(visitante == ""){
		  document.getElementById("bienvenida").textContent=" \
	   Hoy dibujamos con: anda, dinos tu nombre :(.";
	  }
}
// end: saludo ]]
