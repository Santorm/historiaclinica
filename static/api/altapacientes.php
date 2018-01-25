<?php
	session_start();
	//conexión a la base de datos
	require "conexion_bbdd_lp.php";
	
	//recuperar opcion de consulta
	// if (isset($_POST['nombre'])) {
	// $nombre=$_POST['nombre'];
	// $apellido=$_POST['apellido'];
	// $email=$_POST['email'];
	// $ciudad=$_POST['ciudad'];
	
	$request = json_decode(file_get_contents('php://input'));


	$nombre=$request->nombre;
	$dateage=$request->dateage;
	$apellidos=$request->apellido;
	$email=$request->email;
	$ciudad=$request->ciudad;
	$historiaclinica = substr($apellidos,0,2).substr($nombre,0,2).substr($ciudad,0,2).substr($dateage,0,4);
	

	// }

	//validacion desde php
	// if(trim($nombre)=='' || trim($apellidos)=='' || trim($email)=='' || trim($ciudad)==''){
	// 	$mensaje= "Revise que los campos no estén vacíos!";
	// }else{

	
 $sql = "INSERT INTO paciente VALUES (NULL, '$nombre','$apellidos', '$dateage', '$telefono', '$ciudad', '$email', '$historiaclinica', CURRENT_TIMESTAMP, NULL);";

 //controlar duplicados
	if (!mysqli_query($conexionLp, $sql)) {
		if (mysqli_errno($conexionLp)==1062) {
			
			$mensaje='El usuario ya existe, intente con otro nombre de usuario';
		} else {
			die(mysqli_error($conexionLp));
		}
	}

	 else{
		
	 $mensaje='Usuario dado de alta correctamente';
	// $sql2="SELECT * FROM pacientes WHERE usuario='$usuario'";
		
	// 	$result2= mysqli_query($conexionLp,$sql2) or die (mysqli_error($conexionLp));
	// 	$row2 = mysqli_fetch_assoc($result2);

	// 	$_SESSION['lunapiel_reserva']=$usuario;
	// 	$_SESSION['lunapiel_nombre']=$nombre;
	// 	$_SESSION['lunapiel_apellidos']=$apellidos;
	// 	$_SESSION['lunapiel_tipousuario']=$row2['tipousuario'];
	// 	$_SESSION['lunapiel_idpersona']=$row2['id_persona'];

		
		
	// } 
	
	 }
	 
	echo $mensaje;


?>