// Importamos las dependencias necesarias
const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");

// Creamos objeto de express
const app = express();
// Preparamos el enrutador
const router = express.Router();

// Instanciamos objeto de MongoCLient pasando los datos de uri mongoDB compass
const client = new MongoClient(
  "mongodb+srv://gutperdadev:GBzzBPdvIzxwnoSi@dwescluster.hnbcdtr.mongodb.net/"
);


// Funcion asincrona que obtiene los datos
async function getData() {
  try {
    // Conectamos con la BBDD
    await client.connect();
    const collection = client.db("Actividad_14_2").collection("Usuarios");
    // Obtenemos los datos, los pasamos a array y retornamos
    return await collection.find().toArray();
  } catch (error) {
    console.error(error);
  } finally {
    // Cerramos la conexión
    await client.close();
  }
}

// Función asincrónica para insertar datos en la BBDD
async function insertData(data) {
  try {
    // Conectamos con la BBDD
    await client.connect();
    const collection = client.db("Actividad_14_2").collection("Usuarios");
    // Insertamos un nuevo documento en la colección con los datos proporcionados
    await collection.insertOne(data);
  } catch (error) {
    // Manejamos cualquier error que pueda ocurrir durante la conexión o la inserción
    console.error(error);
  } finally {
    // Cerramos la conexión con la BBDD, independientemente de si hubo un error o no
    await client.close();
  }
}

// Middleware para servir archivos estáticos (como index.html) desde el directorio actual
app.use(express.static(__dirname));
// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Ruta GET para enviar el archivo index.html cuando se acceda a la raíz del servidor
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Agregamos el enrutador al middleware de la aplicación
app.use("/", router);

// Ruta POST para manejar los datos del formulario y enviarlos a la BBDD
app.post("/datos", async (req, res) => {
  try {

    // Insertamos los datos en la BBDD
    await insertData(req.body);

    // Obtenemos los datos actualizados de la BBDD
    const datos = await getData();
    // Enviamos los datos como respuesta a la solicitud POST
    res.json(datos);
  } catch (error) {
    // Manejamos cualquier error que pueda ocurrir durante el procesamiento de la solicitud
    console.error(error);
    // Enviamos un mensaje de error al cliente con un código de estado HTTP 500 (Error interno del servidor)
    res.status(500).send("Error interno del servidor");
  }
});

// Hacemos que la aplicación escuche las solicitudes en el puerto 3000
app.listen(3000, () => console.log("Escuchando en el puerto 3000"));
