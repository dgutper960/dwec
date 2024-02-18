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

// Función para conectar a la base de datos
async function connectDB() {
    await client.connect();
  }
  
  // Middleware para manejar errores
  function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).send('Error interno del servidor');
  }
  
  // Middleware para analizar el cuerpo de las solicitudes en formato JSON
  app.use(express.json());
  
  // Ruta GET para enviar el archivo index.html cuando se acceda a la raíz del servidor
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
  });
  
  // Ruta POST para manejar los datos del formulario y enviarlos a la BBDD
  app.post("/datos", async (req, res, next) => {
    try {
      // Insertamos los datos en la BBDD
      await client.db("Actividad_14_2").collection("Usuarios").insertOne(req.body);
      next(); // Pasamos al siguiente middleware
    } catch (error) {
      next(error); // Pasamos el error al siguiente middleware
    }
  }, async (req, res) => {
    try {
      // Obtenemos los datos actualizados de la BBDD
      const datos = await client.db("Actividad_14_2").collection("Usuarios").find().toArray();
      // Enviamos los datos como respuesta a la solicitud POST
      res.json(datos);
    } catch (error) {
      next(error); // Pasamos el error al siguiente middleware
    }
  });
  
  // Conexión a la base de datos
  connectDB()
    .then(() => {
      // Agregamos el enrutador al middleware de la aplicación
      app.use("/", router);
      // Middleware para manejar errores
      app.use(errorHandler);
      // Escuchamos en el puerto 3000
      app.listen(3000, () => console.log('Escuchando en el puerto 3000'));
    })
    .catch(err => console.error('Error al conectar a la base de datos:', err));
  
