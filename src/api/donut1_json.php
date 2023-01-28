<?php

require_once(dirname(__FILE__) . '/../dbconnect.php');
require_once(dirname(__FILE__) . '/../calc_hour.php');

//言語別勉強時間
$sql_language = "SELECT languages.language name ,IFNULL(sum(hours),0) AS language_hours, languages.color FROM languages LEFT JOIN record_languages ON languages.id = record_languages.language_id GROUP BY languages.id ORDER BY languages.id";
$stmt_language = $pdo->prepare($sql_language);
$stmt_language -> execute();
$json_hour_language = $stmt_language->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($json_hour_language,JSON_UNESCAPED_UNICODE);

?>