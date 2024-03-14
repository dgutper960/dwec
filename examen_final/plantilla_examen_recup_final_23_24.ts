class Costes{
        
    constructor(url:string){
    
            this.costesFunction(url); 
    }
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
                $('#datosTabla').append(`<tr><td>${key}</td><td>${obj[key]}</td></tr>`);
                suma += obj[key];
            }
    
            // Muestra la suma total de los costes
            $('#datosTabla').append(`La suma total de los costes es: ${suma}`);
    
        }catch(error:any){
            $("#datosTabla").html('El ID introducido no existe');
            console.log( error.message);
        } 
    }
}

class TablaCostes {

    private url:string;

    constructor(url:string){
        this.url= url;
        $('form').on('submit',this.instCost.bind(this));
      
    }

    instCost(e:any) {
        e.preventDefault(); // Para no abandonar la página al enviar formulario.
        new Costes(this.url) ;     
    }

}
new TablaCostes('plantilla_examen_recup_final_23_24.php');