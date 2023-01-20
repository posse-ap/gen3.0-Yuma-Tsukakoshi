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
$sql_language = "SELECT language_id, languages.language name ,sum(hours) language_hours FROM record_languages INNER JOIN languages ON record_languages.language_id = languages.id GROUP BY language_id ORDER BY language_id";
$stmt_language = $pdo->prepare($sql_language);
$stmt_language -> execute();
$hour_language = $stmt_language->fetchAll(PDO::FETCH_ASSOC);

//コンテンツ別学習時間
$sql_content = "SELECT content_id,contents.content name, sum(hours) content_hours FROM record_contents INNER JOIN contents ON record_contents.content_id = contents.id GROUP BY content_id ORDER BY content_id";
$stmt_content = $pdo->prepare($sql_content);
$stmt_content -> execute();
$hour_content = $stmt_content->fetchAll(PDO::FETCH_ASSOC);

//week32 もし更新時間が同じ場合、その時間における合計時間を要素数(count)で割って各時間に配当する->初めからダミーデータで時間が挿入されているからUPDATE文をsqlで作れば良い？
//でも、実際現段階ではいらない気がする。本来は時間が入ってない状態でINSERTされるから

//db構造確認方法：
// echo "<br>";
// echo "<pre>";
// print_r($変数名);
// echo "</pre>";