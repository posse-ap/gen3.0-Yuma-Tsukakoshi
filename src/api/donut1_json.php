<?php

require_once(dirname(__FILE__) . '/../dbconnect.php');

//言語別勉強時間
//↓api 言語別表示用(言語ごとに合計)
$sql_language = "SELECT languages.language name , ROUND(sum(study_hours.hours/record_count),1) hours,languages.color FROM record_languages AS origin1 INNER JOIN languages ON origin1.language_id = languages.id LEFT OUTER JOIN (SELECT origin2.record_id, count(record_id) AS record_count FROM record_languages AS origin2 GROUP BY record_id) AS origin2 ON origin2.record_id = origin1.record_id LEFT OUTER JOIN study_hours ON study_hours.id = origin1.record_id GROUP BY origin1.language_id";
$stmt_language = $pdo->prepare($sql_language);
$stmt_language -> execute();
$json_hour_language = $stmt_language->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($json_hour_language,JSON_UNESCAPED_UNICODE);

?>