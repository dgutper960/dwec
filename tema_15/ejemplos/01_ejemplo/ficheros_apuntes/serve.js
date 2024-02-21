// Ejemplo de enrutamiento para resolver las rutas correctamente
// en el cliente, para Angular + NodeJS + Express
import express from 'express';
import path from 'path';
const app = express();
const router = express.Router();
var __dirname = path.resolve(); //Resuelve y adapta para módulos ES6

// La siguientes líneas resuelven las peticiones dirigidas
// al servidor (ya sea por AJAX u otros) 
// Estas rutas deben resolverse antes que las del lado del cliente
// de Angular.
router.get('/pag1',function(req,res){
  res.sendFile(path.join( __dirname+'/dibujo.html'));
  //... U otro código.., por ejemplo acceso a BBDD.
});

// Al final de las peticiones dirigidas al servidor NodeJS,
// se añaden las siguientes líneas de código, para que
// se puedan resolver las rutas del lado del cliente que
// genera Angular, el cual debe resolver todas las que no
// vayan hacia el servidor, redirigiendo siempre a INDEX.HTML
router.get('*',function(req,res){
  res.sendFile(path.join( __dirname+'/index.html'));
});

//IMPORTANTE carga archivos js,css, etc.., cargados en los html desde directorio.
app.use(express.static(__dirname));

// IMPORTANTE La siguiente línea debe estar por debajo de 'express.static().
// Y la compilación de Angular con -base-href='/directorio/' para
// que no haya problemas con el enrutamiento de Angular y Nodejs + Express
app.use('/', router);

app.listen(80);
console.log('Escuchando en puerto 80');