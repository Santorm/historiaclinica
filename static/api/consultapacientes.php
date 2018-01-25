<?php 

 // header('Access-Control-Allow-Origin: http://localhost:3000', true);


// $conexionLp = mysqli_connect('localhost', 'root', '', 'reserva_lp')
// or die("Hubo un error al conectar con la base de datos");



// mysqli_set_charset($conexionLp, "utf8");
include "conexion_bbdd_lp.php";




$sql = "SELECT * FROM paciente";



// //$sql = "SELECT *
// //		FROM citas_disponibles 
// //		WHERE id_responsable=$id_responsable AND fecha='$fecha' AND id_centro=$id_centro ";
		

// 		//LEFT JOIN responsable ON 'citas_disponibles.id_responsable'='responsable.id_responsable'";
// 	//	WHERE 'responsable.id_responsable'=$id_responsable";

// 		//LEFT JOIN responsable ON 'citas_disponibles.".$id_responsable."'='responsable.id_responsable'";


// // WHERE  id_centro=$id_centro AND id_tratamiento=$id_tratamiento AND fecha_calendario=$fecha_calendario";



//  //$sql = "INSERT INTO citas_disponibles VALUES (NULL,$id_responsable, $id_centro, $id_tratamiento, 4, '$fecha_calendario', 1);";

//  //controlar duplicados
	

$result=mysqli_query($conexionLp, $sql) or die(mysqli_error($conexionLp));
	
	//antes del bucle creamos un array vacío
	$arrayCitas=array();
	while($fila = mysqli_fetch_assoc($result)){

		// print_r( $fila);
		// return false;
		
array_push($arrayCitas, array('id_persona'=>$fila['id_persona'], 'apellidos'=>$fila['apellidos'], 'nombre'=>$fila['nombre'], 'dateage'=>$fila['dateage'] ,'telefono'=>$fila['telefono'], 'ciudad'=>$fila['ciudad'], 'email'=>$fila['email'], 'historiaclinica'=>$fila['historiaclinica']));
		
 	}



// $arrayCitas=array();
// array_push($arrayCitas, array('usuario'=>'usuario1','nombre'=>'nombre1', 'apellidos'=>'apellidos1'));



echo json_encode($arrayCitas);
?>
