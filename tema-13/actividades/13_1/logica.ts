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
                this.add();
            });

            $('#eliminar').on('click', () => {
                this.rest();
            });
        }

        // metodo añadir boton
        add(): void {
            this.contador++;
            console.log(this.contador);
            new Boton(this.contador);

        }
        // metodo eliminar boton
        rest(): void {
            if (this.contador > 0) { // controlamos que no se eliminen botones que no existen
                $(`#boton${this.contador}`).remove();
                this.contador--;
            }
        }
    }

    /**
     * Clase boton 
     */
    class Boton {
        constructor(private contador: number) {
            
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





