<?php 

session_start();

include "conexion_bbdd_lp.php";

$id_persona = $_SESSION['lphistori']['activepat']['id_persona'];

$sql = "SELECT * FROM fotografias WHERE id_persona = $id_persona";

//controlar duplicados
	

$result=mysqli_query($conexionLp, $sql) or die(mysqli_error($conexionLp));
	
	//antes del bucle creamos un array vacío
	$arrayCitas=array();
	while($fila = mysqli_fetch_assoc($result)){

		// print_r( $fila);
		// return false;
		
array_push($arrayCitas, array('id_foto'=>$fila['id_foto'], 'nombre'=>$fila['nombre'], 'ruta'=>$fila['ruta'], 'toma'=>$fila['id_persona']));
		
 	}



// $arrayCitas=array();
// array_push($arrayCitas, array('usuario'=>'usuario1','nombre'=>'nombre1', 'apellidos'=>'apellidos1'));



echo json_encode($arrayCitas);
?>
