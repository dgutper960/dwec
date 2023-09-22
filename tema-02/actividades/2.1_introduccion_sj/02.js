function numHijos(){
    var mensaje;
    var respuesta = prompt("¿Cuántos hijos tienes?");
    // Declaramos una estructura condicional
    if(respuesta == null || respuesta == ""){
        mensaje = "Ha indicado que no tiene hijos";
    } else{
        mensaje = "Su número de hijos es " + respuesta
    }
    alert (mensaje);

}