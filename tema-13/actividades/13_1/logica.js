/**
 * Implementación de interfaz
 */
/**
 * Clase principal que implementa la interfaz
 */
$(function () {
    var GrupoBot = /** @class */ (function () {
        function GrupoBot() {
            var _this = this;
            this.contador = 0;
            $('#crear').on('click', function () {
                _this.add();
            });
            $('#eliminar').on('click', function () {
                _this.rest();
            });
        }
        GrupoBot.prototype.add = function () {
            this.contador++;
            var nuevoBoton = $("<button id=\"boton".concat(this.contador, "\">Bot\u00F3n ").concat(this.contador, "</button>"));
            nuevoBoton.appendTo('#button-container');
            var boton = new Boton(this.contador);
            boton.bindClickEvent();
        };
        GrupoBot.prototype.rest = function () {
            if (this.contador > 0) {
                $("#boton".concat(this.contador)).remove();
                this.contador--;
            }
        };
        return GrupoBot;
    }());
    /**
     * Clase boton
     */
    var Boton = /** @class */ (function () {
        function Boton(contador) {
            this.contador = contador;
        }
        Boton.prototype.bindClickEvent = function () {
            var _this = this;
            // Utiliza la delegación de eventos para manejar los clics en botones dinámicos
            $('#button-container').on('click', "#boton".concat(this.contador), function () {
                alert("\u00A1Bot\u00F3n ".concat(_this.contador, " pulsado!"));
            });
        };
        return Boton;
    }());
    new GrupoBot();
});
