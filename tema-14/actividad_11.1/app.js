import express from 'express';
import path from 'path';
const app = express();
const router = express.Router();
var __dirname = path.resolve(); //Resuelve y adapta para módulos ES6
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
 
});
router.get('/pag1',function(req,res){
  res.sendFile(path.join( __dirname+'/pag1.html'));
});


app.get('/pagAjax', function (req, res) {
    res.send('<h1>Hola mundo en DIR1!</h1>'); /** Lo que vemos al poner dir1 en la url */
  });