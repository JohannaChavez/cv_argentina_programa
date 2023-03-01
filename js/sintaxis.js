function mostrarOcultar(idElemento, idBoton){
   
    
if (document.getElementById(idBoton).innerHTML == 'Más sobre mí') {
    document.getElementById(idElemento).style.display = 'block';
    document.getElementById(idBoton).innerHTML = "mostrar menos";
  } 
  else {
    document.getElementById(idElemento).style.display = 'none';
    document.getElementById(idBoton).innerHTML = "Más sobre mí";
  }
    }


   