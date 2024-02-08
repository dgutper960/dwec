/*
    var http = require('http');
    http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hola mundo');
    }).listen(8080);
 */

/*
Para hacer uso de cada objeto, Node.js, usa la importación de una serie de módulos ya predefinidos, como si fueran librerías, algo similar al import/export en JS y TS. 
Existen muchos tipos de módulos, incluso se pueden crear personalizados, al exportarlos ya estarían preparados para su importación. 

Para importar un módulo usamos : require ( ) (módulos CommonJS) ó
import (módulos ES6, en este caso hay que añadir al archivo package.json ->  "type":"module" y usar extensión  *.mjs para los módulos exportados)
*/



/*

    import { createServer } from 'http';
    createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hola mundo');
    }).listen(8080);
 
*/
