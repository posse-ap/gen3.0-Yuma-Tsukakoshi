<?php

require_once(dirname(__FILE__) . '/../dbconnect.php');

//コンテンツ別学習時間
//↓api コンテンツ別表示用(コンテンツごとに合計)
$sql_content = "SELECT contents.content name , ROUND(sum(study_hours.hours/record_count),1) hours,contents.color FROM record_contents AS origin1 INNER JOIN contents ON origin1.content_id = contents.id LEFT OUTER JOIN (SELECT origin2.record_id, count(record_id) AS record_count FROM record_contents AS origin2 GROUP BY record_id) AS origin2 ON origin2.record_id = origin1.record_id LEFT OUTER JOIN study_hours ON study_hours.id = origin1.record_id GROUP BY origin1.content_id";

$stmt_content = $pdo->prepare($sql_content);
$stmt_content -> execute();
$json_hour_content = $stmt_content->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($json_hour_content,JSON_UNESCAPED_UNICODE);

?>