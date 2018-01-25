<?php

session_start();

$ruta = 'picsloaded/'; //Decalaramos una variable con la ruta en donde almacenaremos los archivos
$mensaje = '';//Declaramos una variable mensaje quue almacenara el resultado de las operaciones.
$fotossubidas=[];
$indexfoto=0;

$id_persona = $_SESSION['lphistori']['activepat']['id_persona'];

// $id_persona = $_SESSION['lphistori']['activepat']['id_persona'];
// echo $id_persona;
// return false;

foreach ($_FILES as $key) //Iteramos el arreglo de archivos
{

// print_r($_FILES);
 // return false;
	
	$indexfoto++;
  if($key['error'] == UPLOAD_ERR_OK )//Si el archivo se paso correctamente Ccontinuamos 
    {


    	// $id_paciente_activo = $key['id_paciente_activo'];
    	// $id_paciente_activo = $key['id_paciente'];
      	$NombreOriginal = $key['name'];//Obtenemos el nombre original del archivo
      	$temporal = $key['tmp_name']; //Obtenemos la ruta Original del archivo
      	$folder = $ruta.$id_persona."/";

      	
			if (!file_exists($folder)) {
    			mkdir($folder, 0777, true);
    			 //Creamos una ruta de destino con la variable ruta y el nombre original del archivo
			} 
      	$destino = $folder.$NombreOriginal;
      move_uploaded_file($temporal, $destino); //Movemos el archivo temporal a la ruta especificada   
    }
 
  if ($key['error']=='') //Si no existio ningun error, retornamos un mensaje por cada archivo subido
    {

    		// $fotossubidas = array_merge($fotossubidas, array("nombre"=>$NombreOriginal,"ruta"=>$destino));

    		$fotossubidas['pic_'.$indexfoto]["nombre"]=$NombreOriginal;
    		$fotossubidas['pic_'.$indexfoto]["ruta"]=$destino;

    	// array_push($fotossubidas, $NombreOriginal, $destino );
    	// $mensaje = json_encode($key);
    	$mensaje= json_encode($fotossubidas);
      // $mensaje .= '-> Archivo <b>'.$NombreOriginal.'</b> Subido correctamente. <br>';
    }
  if ($key['error']!='')//Si existio algún error retornamos un el error por cada archivo.
    {
      $mensaje .= '-> No se pudo subir el archivo debido al siguiente Error: n'.$key['error']. "visit http://www.php.net/manual/en/features.file-upload.errors.php" ; 
    }
  
}
// print_r($fotossubidas);
echo  $mensaje;// Regresamos los mensajes generados al cliente
?>