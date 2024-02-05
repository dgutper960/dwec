interface GrupoBot {
    add(): void;
    rest(): void;
}

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

    add(): void {
        this.contador++;
        const nuevoBoton = $(`<button id="boton${this.contador}">Botón ${this.contador}</button>`);
        nuevoBoton.appendTo('#button-container');
        const boton = new Boton(this.contador);
        boton.bindClickEvent();
    }

    rest(): void {
        if (this.contador > 0) {
            $(`#boton${this.contador}`).remove();
            this.contador--;
        }
    }
}

class Boton {
    constructor(private numero: number) {}

    public bindClickEvent(): void {
        $('#button-container').on('click', `#boton${this.numero}`, () => {
            alert(`¡Botón ${this.numero} pulsado!`);
        });
    }
}



