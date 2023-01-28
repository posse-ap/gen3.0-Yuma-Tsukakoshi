<?php

require_once(dirname(__FILE__) . '/../dbconnect.php');
require_once(dirname(__FILE__) . '/../calc_hour.php');

//コンテンツ別学習時間
$sql_content = "SELECT contents.content name ,IFNULL(sum(hours),0) AS content_hours, contents.color FROM contents LEFT JOIN record_contents ON contents.id = record_contents.content_id GROUP BY contents.id ORDER BY contents.id";
$stmt_content = $pdo->prepare($sql_content);
$stmt_content -> execute();
$json_hour_content = $stmt_content->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($json_hour_content,JSON_UNESCAPED_UNICODE);

?>