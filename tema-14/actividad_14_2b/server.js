import { MongoClient, ServerApiVersion } from 'mongodb';
import express from 'express';
import path from 'path';

const app = express();

const router = express.Router();
const __dirname = path.resolve();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(__dirname));

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));


const uri = "mongodb+srv://gutperdadev:nXTqSQRISSwpLJDd@dwescluster.hnbcdtr.mongodb.net/";
const client = new MongoClient(uri);

app.get('/conexion', async (req, res) =>{
    try {
        await client.connect();
        const coleccion = client.db("Actividad_14_2").collection("Usuarios");
        const datos = await coleccion.find().toArray();
        res.json(datos);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
});
