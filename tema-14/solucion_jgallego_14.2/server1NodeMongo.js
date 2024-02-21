import express from 'express';
import path from 'path';
const app = express();
var __dirname = path.resolve(); //Resuelve y adapta para módulos ES6

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/indexNodeMongo.html'));
});

// Parsea los parámetros recibidos en JSON
app.use(express.json()); 
app.post('/registro',function(req,res){
    //Obtiene parámetros enviados por POST
    var name=req.body.nombre;
    var surn=req.body.apellido;
    async function main() {
        try {
          const datos = await import('./serverNodeMongo.mjs');
          const allReg=await datos.run({nombre:name,apellido:surn}); 
          res.json(allReg);
        }
        catch(err) {
          console.log(err);
        }
      }
    main();
   
});
//IMPORTANTE carga archivos js,css, etc.., cargados en los html desde directorio
app.use(express.static(__dirname));
app.listen(3000);
console.log('Escuchando en puerto 3000');