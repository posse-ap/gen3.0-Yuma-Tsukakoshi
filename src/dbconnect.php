<?php

$dsn = 'mysql:dbname=posse;host=db';
$user = 'root';
$password = 'root';

try{
  $pdo = new PDO($dsn,$user,$password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
  echo '接続に失敗しました' . $e->getMessage();
  exit();
}


?>



