<?php

require_once(dirname(__FILE__) . '/../dbconnect.php');
require_once(dirname(__FILE__) . '/../calc_hour.php');
header("Content-Type: application/json; charset=UTF-8");

//言語別勉強時間
$sql_language = "SELECT languages.language name ,sum(hours) language_hours , languages.color FROM record_languages INNER JOIN languages ON record_languages.language_id = languages.id GROUP BY language_id ORDER BY language_id";
$stmt_language = $pdo->prepare($sql_language);
$stmt_language -> execute();
$json_hour_language = $stmt_language->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($json_hour_language,JSON_UNESCAPED_UNICODE);

?>