"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Costes {
    constructor(url) {
        this.costesFunction(url);
    }
    costesFunction(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                url = "plantilla_examen_recup_final_23_24.php";
                // Define un objeto con los datos a enviar al servidor
                var data = {
                    ID: $('#ID').val(), // Obtiene el valor del elemento con el ID
                }; // Como objeto
                // Realiza una solicitud HTTP POST a la URL especificada
                const response = yield fetch(url, {
                    method: 'POST', // Especifica el método como POST
                    body: JSON.stringify(data), // Convierte el objeto a un JSON y la asigna al cuerpo
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                // Espera a que la respuesta del servidor se convierta a JSON y la asigna a la variable obj
                const obj = yield response.json();
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
            }
            catch (error) {
                $("#datosTabla").html('El ID introducido no existe');
                console.log(error.message);
            }
        });
    }
}
class TablaCostes {
    constructor(url) {
        this.url = url;
        $('form').on('submit', this.instCost.bind(this));
    }
    instCost(e) {
        e.preventDefault(); // Para no abandonar la página al enviar formulario.
        new Costes(this.url);
    }
}
new TablaCostes('plantilla_examen_recup_final_23_24.php');
