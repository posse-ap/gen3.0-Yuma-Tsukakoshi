<?php

require_once(dirname(__FILE__) . '/../dbconnect.php');
require_once(dirname(__FILE__) . '/../calc_hour.php');

$get_date = new DateTime('now');
//今月の日毎の学習時間
$sql_date = "SELECT date,sum(hours) hours FROM study_hours WHERE date BETWEEN :month_first_day AND :month_last_day GROUP BY date";
$month_first = $get_date->format('Y-m-01');
$month_last = $get_date->modify('last day of')->format('Y-m-d');
$stmt_date = $pdo->prepare($sql_date);
$stmt_date -> bindValue(":month_first_day",$month_first);
$stmt_date -> bindValue(":month_last_day",$month_last);
$stmt_date ->execute();
$json_hour_each_date = $stmt_date ->fetchAll(PDO::FETCH_ASSOC);
// echo "<br>";
// echo "<br>";
// echo "<br>";
// echo "<br>";
echo json_encode($json_hour_each_date,JSON_UNESCAPED_UNICODE);


?>