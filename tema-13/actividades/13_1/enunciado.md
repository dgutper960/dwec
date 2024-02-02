## Según los siguientes requisitos :

### Se realizará en TS con jQuery.
- El código TS, estará compuesto por un interface que va a definir dos métodos add( ) y rest ( ) para añadir y quitar botones respectivamente, y que serán implementado por una clase principal ‘GrupoBot’.
- Dicha clase además de implementar los métodos tendrá como atributo privado una variable ‘contador’ para llevar la cuenta del número de botones, y solo se instanciará una sola vez.
 - Para componer cada botón se creará otra clase ‘Boton’ (sin métodos ni atributos, solo constructor) que será instanciada solo desde el método add () de la clase principal, tantas veces como botones se vayan creando, siéndole necesario pasarle el valor actual de contador.
- Como se puede ver en la captura, cada botón mostrará el número de botón (según contador) y al pulsarlo mostrará una alert () con el mensaje indicado y el número correspondiente.


#### NOTA: En este caso, se entregará el archivo TS, el JS generado , y el HTML. 