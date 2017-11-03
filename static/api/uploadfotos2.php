<?php

include('./class.upload.php-master/src/class.upload.php');


$foo = new Upload($_FILES['archivos']); 

if ($foo->uploaded) {
   // save uploaded image with no changes
   $foo->Process('/home/user/files/');
   if ($foo->processed) {
     echo 'original image copied';
   } else {
     echo 'error : ' . $foo->error;
   }
   // save uploaded image with a new name
   $foo->file_new_name_body = 'foo';
   $foo->Process('/home/user/files/');
   if ($foo->processed) {
     echo 'image renamed "foo" copied';
   } else {
     echo 'error : ' . $foo->error;
   }   
   // save uploaded image with a new name,
   // resized to 100px wide
   $foo->file_new_name_body = 'image_resized';
   $foo->image_resize = true;
   $foo->image_convert = gif;
   $foo->image_x = 100;
   $foo->image_ratio_y = true;
   $foo->Process('/home/user/files/');
   if ($foo->processed) {
     echo 'image renamed, resized x=100
           and converted to GIF';
     $foo->Clean();
   } else {
     echo 'error : ' . $foo->error;
   } 
} 



	// $foto = $_FILES['fotos'];

	// echo $foto;
	// return false;
	// $data = array('success' => false);
	
	// if(copy($foto['tmp_name'],'ruta/'.$foto['name'])){
	// 	$data = array('success' => true);
	// }
	
	// echo json_encode($data);
?>