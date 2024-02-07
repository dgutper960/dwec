/**
 * Implementación de interfaz
 */

interface GrupoBot {
    add(): void;
    rest(): void;
}

/**
 * Clase principal que implementa la interfaz
 */
$(function () {


    class GrupoBot implements GrupoBot {
        private contador: number = 0;

        constructor() {
            $('#crear').on('click', () => {
                this.add(); // METODOS DE ESTA CLASE
            });

            $('#eliminar').on('click', () => {
                this.rest(); // METODOS DE ESTA CLASE
            });
        }

        // metodo añadir boton
        add(): void {
            this.contador++; // INCREMENTO DE CONTADOR CON CADA LLAMADA
            console.log(this.contador);
            new Boton(this.contador); // INSTANCIOAMOS BOTON CON CADA LLAMADA

        }
        // metodo eliminar boton
        rest(): void {
            if (this.contador > 0) { // controlamos que no se eliminen botones que no existen
                $(`#boton${this.contador}`).remove();
                this.contador--; // DECREMENTO CON LA LLAMADA AL MÉTODO
            }
        }
    }

    /**
     * Clase boton 
     */
    class Boton {
        constructor(private contador: number) { // CONTADOR ES UNA PROPIEDAD DE LA CLASE IMPLEMENTADA EN EL CONSTRUCUTOR
            // CREAMOS EL BOTON Y AÑADIMOS EL EVENTO PARA EL ALERT
            $(`<button id="boton${this.contador}">Botón ${this.contador}</button>`);
            $('#button-container').on('click', `#boton${this.contador}`, () => {
                alert(`¡Botón ${this.contador} pulsado!`);
            });
        }

    }

    /**
     * Debemos instanciar la clase principal al menos una vez
     */
    new GrupoBot();

});





