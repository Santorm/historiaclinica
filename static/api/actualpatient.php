<?php 

session_start();

$request = json_decode(file_get_contents('php://input'));


	$id_persona=$request->id_persona;
	$apellidos=$request->apellidos;
	$nombre=$request->nombre;
	$ciudad=$request->ciudad;
	$email=$request->email;
	// $historiaclinica=$request->historiaclinica;


$_SESSION['lphistori']['activepat']['id_persona'] = $id_persona;
$_SESSION['lphistori']['activepat']['apellidos'] = $apellidos;
$_SESSION['lphistori']['activepat']['nombre'] = $nombre;
$_SESSION['lphistori']['activepat']['ciudad'] = $ciudad;
$_SESSION['lphistori']['activepat']['email'] = $email;
// $_SESSION['lphistori']['activepat']['historiaclinica'] = $historiaclinica;

// print_r($_SESSION['lphistori']);
?>
