const express = require('express');
const path = require('path');
const { MongoClient } = require("mongodb");

const app = express();
const router = express.Router();
// Elimina la línea const __dirname = path.resolve(); ya que __dirname ya está disponible globalmente

const client = new MongoClient("mongodb+srv://gutperdadev:GBzzBPdvIzxwnoSi@dwescluster.hnbcdtr.mongodb.net/");

async function getData() {
    try {
        await client.connect();
        const collection = client.db("Actividad_14_2").collection("Usuarios");
        return await collection.find().toArray();
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

async function insertData(data) {
    try {
        await client.connect();
        const collection = client.db("Actividad_14_2").collection("Usuarios");
        await collection.insertOne(data);
    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
    }
}

app.use(express.static(__dirname));
app.use(express.json()); // Middleware para analizar el cuerpo de la solicitud en formato JSON

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/', router);

app.post('/datos', async (req, res) => {
    try {
        if (req.body.nombre !== '') {
            await insertData(req.body);
        }
        const datos = await getData();
        res.json(datos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

app.listen(3000, () => console.log('Escuchando en el puerto 3000'));

