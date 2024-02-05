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
var Boton = /** @class */ (function () {
    function Boton(numero) {
        this.numero = numero;
    }
    Boton.prototype.bindClickEvent = function () {
        var _this = this;
        $('#button-container').on('click', "#boton".concat(this.numero), function () {
            alert("\u00A1Bot\u00F3n ".concat(_this.numero, " pulsado!"));
        });
    };
    return Boton;
}());
