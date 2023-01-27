<?php

require_once(dirname(__FILE__) . '/../dbconnect.php');
require_once(dirname(__FILE__) . '/../calc_hour.php');
header("Content-Type: application/json; charset=UTF-8");

//コンテンツ別学習時間
$sql_content = "SELECT contents.content name, sum(hours) content_hours, contents.color FROM record_contents INNER JOIN contents ON record_contents.content_id = contents.id GROUP BY content_id ORDER BY content_id";
$stmt_content = $pdo->prepare($sql_content);
$stmt_content -> execute();
$json_hour_content = $stmt_content->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($json_hour_content,JSON_UNESCAPED_UNICODE);

?>