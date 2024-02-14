import express from 'express';
import path from 'path';
const app = express();
const router = express.Router();
var __dirname = path.resolve(); //Resuelve y adapta para módulos ES6
router.get('/',function(req,res){
  // Enviamos el archivo index.html
  res.sendFile(path.join(__dirname+'/index.html'));

});

// Indicamos la ruta para el envio por GET
router.get('/pagAjax',function(req,res){

  // Simulamos los datos JSON
  let dataJSON = {
    nombre: 'David',
    apellidos: 'Gutiérrez Pérez'
  };
  
  // llamamos a res
  res.json(dataJSON);

});

// Iniciamos servidor
app.use('/', router);
app.use(express.static(__dirname));//IMPORTANTE carga archivos js,css, etc.., cargados en los html desde directorio
app.listen(3000);
console.log('Escuchando en puerto 3000');