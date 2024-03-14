Dado los siguientes archivos de referencia: HTML , TS , PHP 
Se pide completar el código del archivo TS para generar la siguiente vista (con tabla) de los costes de fabricación de una serie de carteras de piel, a partir del ID enviado en una petición AJAX (mediante función asíncrona) y una cadena JSON devuelta por el archivo PHP . (Ver figura)

Según los siguientes puntos:

El archivo PHP devolverá un objeto (en JSON) con los costes de la cartera según ID recibido.
Se deberá recorrer todos los costes con el bucle correspondiente.
Debe mostrar el TOTAL de los costes de la cartera según ID.
Tened en cuenta la declaración de tipos y la instalación del paquete para jQuery (en su caso).
Todo lo que falte será supuesto por el alumno/a.



plantilla_examen_recup_final_23_24.extension


    async costesFunction(url:string)  {
        try {
            url = "plantilla_examen_recup_final_23_24.php";
    
            // Define un objeto con los datos a enviar al servidor
            var data = {
                ID: $('#ID').val(), // Obtiene el valor del elemento con el ID
            }; // Como objeto
    
            // Realiza una solicitud HTTP POST a la URL especificada
            const response = await fetch(url, {
                method: 'POST', // Especifica el método como POST
                body: JSON.stringify(data), // Convierte el objeto a un JSON y la asigna al cuerpo
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            // Espera a que la respuesta del servidor se convierta a JSON y la asigna a la variable obj
            const obj = await response.json();
    
            let suma = 0;

            console.log(obj);
    
            // Recorre el objeto y suma todos los costes
            for (let key in obj) {
                console.log(key);
                console.log(obj[key]);
                $('#datos').append(`<p>${key} ${obj[key]}</p>`);
                suma += obj[key];
            }
    
            // Muestra la suma total de los costes
            $('#datos').append(`La suma total de los costes es: ${suma}`);

