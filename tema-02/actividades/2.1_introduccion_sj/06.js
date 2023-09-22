function conversionMS(){
    var velocidadKMh = prompt("Indique su velocidad en km/h");
    var velocidadMS = parseFloat(velocidadKMh/3.6); // Formula para pasar de km/h a m/s

    alert("Su velocidad de "+velocidadKMh+
    "km/h es de:\n"+velocidadMS+"m/s");
}