<?php

/**
 * Clase conexion
 * - Esta clase será comun en todos los proyectos
 */

class Conexion
{
    # unico atributo -> visibilidad protegida
    protected $pdo;

    public $id;

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
            $this->id = $_GET['id'];


        } catch (PDOException $e) {
            echo 'FALLO DE CONEXIÓN';
            exit();
        }

        // echo 'Conexión realizada con éxito';

    }



    /**
     * Creamos los métodos directamente
     */
    // Mostrar todas las personas
    public function getPersonas()
    {
        // realizamos la consulta sql
        $sql = "SELECT id, nombre FROM tema10.datos";

        $stmt = $this->pdo->prepare($sql);

        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($result);

    }

    public function getIndividuo(int $id)
    {

        $sql = "SELECT * FROM tema10.datos WHERE id = :id";

        $stmt = $this->pdo->prepare($sql);

        $stmt->bindParam(':id', $id, PDO::PARAM_INT);

        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_OBJ);

        echo json_encode($result);


    }


}



$conexion = new Conexion();

echo $conexion->getIndividuo(2);

if($conexion->id == ''){
    $conexion->getPersonas();
}else{
    $conexion->getIndividuo($conexion->id);
}


?>