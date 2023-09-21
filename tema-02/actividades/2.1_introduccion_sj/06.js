function conversionMS(){
    var velocidadKMh = prompt("Indique su velocidad en km/h");
    var velocidadMS = parseFloat(velocidadKMh/3.6);

    alert("Su velocidad de "+velocidadKMh+
    "km/h es de:\n"+velocidadMS+"m/s");
}