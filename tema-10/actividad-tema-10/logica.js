function funAjax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        let obj=JSON.parse(this.responseText);
        document.getElementById("datos").innerHTML = `Desde servidor ${obj.nombre} de ${obj.ciudad}` ;
        }
    }
    xhttp.open("GET", "conexion.php?"+valor, true);
    xhttp.send();
} 