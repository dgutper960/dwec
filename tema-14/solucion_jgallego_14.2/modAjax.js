async function envia_post(e){
            // Para no abandonar la página al enviar formulario.
            if(e!=undefined) e.preventDefault();    
            var url = '/registro';  
            var data = {
                    nombre: $('#nombre').val(),
                    apellido: $('#apellido').val()    
                }; // Como objeto
            
            const response = await fetch(url, {
            method: 'POST', // or 'PUT' , que envía en lugar de parámetros, una cadena JSON.
            body: JSON.stringify(data), // convierte a cadena JSON
            headers:{
                'Content-Type': 'application/json'
            }
            })
            const obj= await response.json();
            $('#datos').html('');
            console.log(obj);
            obj.forEach((element) => {
                $('#datos').append(`<tr><td>${element.nombre}</td><td>${element.apellido}</td></tr>`)
            });
}

$('form').submit(envia_post);
envia_post();