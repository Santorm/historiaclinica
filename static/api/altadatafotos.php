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
  

  $request = json_decode(file_get_contents('php://input'), true);
// $request = json_decode(json_encode(file_get_contents('php://input')), true);

  // $request = json_decode(file_get_contents('php://input'));
  // $array = json_decode(json_encode($array), true);

// print_r($request);
// return false;
  // $nombre=$request->nombre;
  // $ruta=$request->ruta;

  foreach ($request as $key => $value) {
    $nombre = $request[$key]['nombre'];
    $ruta = $request[$key]['ruta'];
    $id_paciente = $request[$key]['id_paciente'];
    $toma = "perfil derecho";

  
  
  // print_r($request['pic_1']['nombre']);

// 1:{nombre: "pic5.jpg", ruta: "picsloaded/pic5.jpg"}
// 2:{nombre: "pic8.jpg", ruta: "picsloaded/pic8.jpg"}

  // return false;  

  

  // }

  //validacion desde php
  // if(trim($nombre)=='' || trim($apellidos)=='' || trim($email)=='' || trim($ciudad)==''){
  //  $mensaje= "Revise que los campos no estén vacíos!";
  // }else{
// TODO: LLAMAR AL ID DEL USUARIO ACTIVO 
  
 $sql = "INSERT INTO fotografias VALUES (NULL, '$nombre', '$ruta', '$toma', $id_paciente);";

 //controlar duplicados
  if (!mysqli_query($conexionLp, $sql)) {
    if (mysqli_errno($conexionLp)==1062) {
      
      $mensaje='El usuario ya existe, intente con otro nombre de usuario';
    } else {
      die(mysqli_error($conexionLp));
    }
  }

   else{
    
   $mensaje='Fotos dadas de alta correctamente';
  // $sql2="SELECT * FROM pacientes WHERE usuario='$usuario'";
    
  //  $result2= mysqli_query($conexionLp,$sql2) or die (mysqli_error($conexionLp));
  //  $row2 = mysqli_fetch_assoc($result2);

  //  $_SESSION['lunapiel_reserva']=$usuario;
  //  $_SESSION['lunapiel_nombre']=$nombre;
  //  $_SESSION['lunapiel_apellidos']=$apellidos;
  //  $_SESSION['lunapiel_tipousuario']=$row2['tipousuario'];
  //  $_SESSION['lunapiel_idpersona']=$row2['id_persona'];

    
    
  // } 
  
   }

  }
   
  echo $mensaje;


?>