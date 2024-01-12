
function funAjax(url,fun) {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        fun(this);
    }
}
xhttp.open("GET", url, true);
xhttp.send();
} 

function fun1 (xhttp){
let obj=JSON.parse(xhttp.responseText);
document.getElementById("datos").innerHTML = `Desde servidor ${obj.nombre} de ${obj.ciudad}` ;
}

function fun2 (xhttp){
    let obj=JSON.parse(xhttp.responseText);
    document.getElementById("datos").innerHTML = `Desde servidor ${obj.nombre} de ${obj.ciudad}` ;
    }

/* <button type="button" onclick="funAjax ('jsonGET.php?nombre=Juan&ciudad=Ubrique',fun1)">
Envía parámetros por GET y recibe valores</button>
<div id="datos"> </div>
<script></script> */