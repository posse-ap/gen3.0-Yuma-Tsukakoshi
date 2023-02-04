<?php

require_once(dirname(__FILE__) . '/dbconnect.php');

$hour_sql = 'SELECT * FROM study_hours';
$hours = $pdo->query($hour_sql)->fetchAll(PDO::FETCH_ASSOC);

//今日の勉強時間
$get_date = new DateTime('now');
$today = $get_date->format('Y-m-d');
$stmt_today = $pdo->prepare("SELECT sum(hours) as hour_today FROM study_hours WHERE date= :today");
$stmt_today -> bindValue(":today",$today);
$stmt_today -> execute();
$hour_today =  $stmt_today->fetch(PDO::FETCH_ASSOC);

//今月の勉強時間
$month = $get_date->format('Y-m-01');
$stmt_month = $pdo->prepare("SELECT sum(hours) as hour_month FROM study_hours WHERE date BETWEEN :month_first_day AND :today");
$stmt_month -> bindValue(":month_first_day",$month);
$stmt_month -> bindValue(":today",$today);
$stmt_month->execute();
$hour_month = $stmt_month->fetch(PDO::FETCH_ASSOC);

//総勉強時間
$stmt_total = $pdo->query("SELECT sum(hours) as hour_total FROM study_hours");
$hour_total = $stmt_total ->fetch(PDO::FETCH_ASSOC);


//今月の日毎の学習時間
$sql_date = "SELECT id,date,hours FROM study_hours WHERE date BETWEEN :month_first_day AND :month_last_day";
$month_first = $get_date->format('Y-m-01');
$month_last = $get_date->modify('last day of')->format('Y-m-d');
$stmt_date = $pdo->prepare($sql_date);
$stmt_date -> bindValue(":month_first_day",$month_first);
$stmt_date -> bindValue(":month_last_day",$month_last);
$stmt_date ->execute();
$hour_each_date = $stmt_date ->fetchAll(PDO::FETCH_ASSOC);

//言語別勉強時間
//↓完成系
// $sql_language = "SELECT languages.language name , origin1.record_id ,study_hours.hours, origin2.record_count , ROUND(study_hours.hours/record_count,1) FROM record_languages AS origin1 INNER JOIN languages ON origin1.language_id = languages.id LEFT OUTER JOIN (SELECT origin2.record_id, count(record_id) AS record_count FROM record_languages AS origin2 GROUP BY record_id) AS origin2 ON origin2.record_id = origin1.record_id LEFT OUTER JOIN study_hours ON study_hours.id = origin1.record_id"; 

//↓表示用(各record 言語数で割り算)
$sql_language_main = "SELECT languages.language name , ROUND(sum(study_hours.hours/record_count),1) hours,languages.color FROM record_languages AS origin1 INNER JOIN languages ON origin1.language_id = languages.id LEFT OUTER JOIN (SELECT origin2.record_id, count(record_id) AS record_count FROM record_languages AS origin2 GROUP BY record_id) AS origin2 ON origin2.record_id = origin1.record_id LEFT OUTER JOIN study_hours ON study_hours.id = origin1.record_id GROUP BY origin1.language_id";

// $stmt_language = $pdo->prepare($sql_language_main);
// $stmt_language -> execute();
// $hour_language = $stmt_language->fetchAll(PDO::FETCH_ASSOC);

//コンテンツ別学習時間
//↓完成系
// $sql_content = "SELECT contents.content name , origin1.record_id ,study_hours.hours, origin2.record_count , ROUND(study_hours.hours/record_count,1) FROM record_contents AS origin1 INNER JOIN contents ON origin1.content_id = contents.id LEFT OUTER JOIN (SELECT origin2.record_id, count(record_id) AS record_count FROM record_contents AS origin2 GROUP BY record_id) AS origin2 ON origin2.record_id = origin1.record_id LEFT OUTER JOIN study_hours ON study_hours.id = origin1.record_id"; 

//↓表示用(各record コンテンツ数で割り算)
$sql_content_main = "SELECT contents.content name , origin1.record_id , study_hours.hours,ROUND(study_hours.hours/record_count,1) record_hours FROM record_contents AS origin1 INNER JOIN contents ON origin1.content_id = contents.id LEFT OUTER JOIN (SELECT origin2.record_id, count(record_id) AS record_count FROM record_contents AS origin2 GROUP BY record_id) AS origin2 ON origin2.record_id = origin1.record_id LEFT OUTER JOIN study_hours ON study_hours.id = origin1.record_id"; 

// $stmt_content = $pdo->prepare($sql_content_main);
// $stmt_content -> execute();
// $hour_content = $stmt_content->fetchAll(PDO::FETCH_ASSOC);

//db構造確認方法：
// echo "<br>";
// echo "<pre>";
// print_r($変数名);
// echo "</pre>";