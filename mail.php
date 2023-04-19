<?php
/*($_SERVER);
die();
$_SERVER['REQUEST_METHOD'];

isset($_POST['email'])*/


$email = $_POST['email'];
$titulo = $_POST['titulo'];
$mensaje = $_POST['mensaje'];

$rta = mail('tonyretanac021@gmail.com',"De: $email | $titulo", $mensaje);
if ($rta) {
    // El correo se envió correctamente, redirigir al usuario a index.html
    header('Location: index.html');
    exit;
  } else {
    // Hubo un error al enviar el correo, mostrar un mensaje de error
    echo 'Hubo un error al enviar el correo.';
  }