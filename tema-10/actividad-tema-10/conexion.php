<?php

/**
 * Clase conexion
 * - Esta clase será comun en todos los proyectos
 */

class Conexion
{
    # unico atributo -> visibilidad protegida
    protected $pdo;

    # Constructor
    public function __construct()
    {

        try {

            $dsn = "mysql:host=localhost;dbname=tema10";

            $options = [

                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_PERSISTENT => false,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci"

            ];

            $this->pdo = new PDO($dsn, 'root', null, $options);

        } catch (PDOException $e) {
            echo 'FALLO DE CONEXIÓN';
            exit();
        }

        // echo 'Conexión realizada con éxito';

    }

    // /** Creamos un método para cerrar la  conexión */
    // public function cerrar_conexion()
    // {
    //     $this->pdo = null;
    // }

    /**
     * Creamos los métodos directamente
     */
    // Mostrar todas las personas
    public function getDatos($valor)
    {

        if ($valor === 'id') {


            $sql = "SELECT * FROM tema10.datos WHERE id = :id";

            $stmt = $this->pdo->prepare($sql);

            $stmt->bindParam(':id', $id, PDO::PARAM_INT);

            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_OBJ);

            echo json_encode($result);

        } else {

            // realizamos la consulta sql
            $sql = "SELECT nombre FROM tema10.datos";

            $stmt = $this->pdo->prepare($sql);

            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            echo json_encode($result);

        }


    }

}

$valor = $_GET['valor'];

$respuesta = new Conexion();



?>