DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
USE posse;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
) CHARSET=utf8;

insert into users (name, email, password) values ("管理者1", "admin@example.com", "password");

DROP TABLE IF EXISTS user_invitations;
CREATE TABLE user_invitations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  -- expired_at DATETIME,
  invited_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  activated_at DATETIME,
  token VARCHAR(255),
  FOREIGN KEY (user_id) REFERENCES users(id)
) CHARSET=utf8;

insert into user_invitations (user_id, invited_at, activated_at, token) values (1, DATE_SUB(CURRENT_DATE, INTERVAL 1 DAY), CURRENT_DATE, "token");

-- 学習時間テーブル
DROP TABLE IF EXISTS study_hours;

CREATE TABLE study_hours(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  date DATE NOT NULL COMMENT "学習日",
  hours FLOAT NOT NULL COMMENT "学習時間",
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT "作成日時",
  updataed_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT "更新日時"
  -- CURRENT_TIMESTAMP :現在の日付と時刻を取得  TIMESTAMP:insert時 / ON UPDATE CURRENT_TIMESTAMP:update時
)CHARSET=utf8;

INSERT INTO study_hours(id,date,hours) VALUES
(1,'2023-02-01','8'), 
(2,'2023-02-03','9'), 
(3,'2023-02-06','4'), 
(4,'2023-02-08','8'), 
(5,'2023-02-12','7.5'), 
(6,'2023-02-13','2.5'), 
(7,'2023-02-14','8.5'), 
(8,'2023-02-15','2'), 
(9,'2023-02-17','6.5'), 
(10,'2023-02-17','7.5'), 
(11,'2023-02-19','9.5'), 
(12,'2023-02-19','7'), 
(13,'2023-02-19','1'), 
(14,'2023-02-21','6.5'), 
(15,'2023-02-24','7.5'), 
(16,'2023-02-25','1.5'), 
(17,'2023-02-25','9.5'), 
(18,'2023-02-25','2'), 
(19,'2023-02-27','8.5'), 
(20,'2023-02-28','3');
-- (21,'2023-03-01','8'), 
-- (22,'2023-03-03','9'), 
-- (23,'2023-03-06','1.5'), 
-- (24,'2023-03-08','8'), 
-- (25,'2023-03-12','7.5'), 
-- (26,'2023-03-13','2.5'), 
-- (27,'2023-03-14','8.5'), 
-- (28,'2023-03-15','2'), 
-- (29,'2023-03-17','6.5'), 
-- (30,'2023-03-17','7.5'), 
-- (31,'2023-03-19','9.5'), 
-- (32,'2023-03-19','7'), 
-- (33,'2023-03-19','1'), 
-- (34,'2023-03-21','6.5'), 
-- (35,'2023-03-24','7.5'), 
-- (36,'2023-03-25','1.5'), 
-- (37,'2023-03-25','9.5'), 
-- (38,'2023-03-25','2'), 
-- (39,'2023-03-27','8.5'), 
-- (40,'2023-03-28','3'); 

-- 学習言語勉強記録テーブル
DROP TABLE IF EXISTS record_languages;

CREATE TABLE record_languages(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  record_id INT NOT NULL COMMENT "記録ID",
  language_id INT NOT NULL COMMENT "学習言語ID",
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT "作成日時",
  updataed_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT "更新日時"
)CHARSET=utf8;

INSERT INTO record_languages(id,record_id,language_id) VALUES 
(1,1,1),
(2,1,3),
(3,2,1),
(4,2,2),
(5,2,6),
(6,3,6),
(7,3,4),
(8,4,4),
(9,4,3),
(10,4,2),
(11,5,6),
(12,6,6),
(13,7,3),
(14,8,2),
(15,8,3),
(16,9,2),
(17,9,4),
(18,10,6),
(19,11,5),
(20,12,1),
(21,13,1),
(22,13,3),
(23,14,1),
(24,14,2),
(25,14,6),
(26,15,6),
(27,15,4),
(28,16,4),
(29,16,3),
(30,16,2),
(31,17,6),
(32,18,6),
(33,18,3),
(34,18,2),
(35,18,3),
(36,19,2),
(37,19,4),
(38,19,6),
(39,20,5),
(40,20,1);

-- 学習コンテンツ勉強記録テーブル
DROP TABLE IF EXISTS record_contents;

CREATE TABLE record_contents(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  record_id INT NOT NULL COMMENT "記録ID",
  content_id INT NOT NULL COMMENT "学習コンテンツID",
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT "作成日時",
  updataed_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT "更新日時"
)CHARSET=utf8;

INSERT INTO record_contents(id,record_id,content_id) VALUES 
(1,1,1),
(2,1,3),
(3,2,1),
(4,3,2),
(5,3,1),
(6,4,3),
(7,5,3),
(8,6,3),
(9,7,3),
(10,7,2),
(11,7,1),
(12,8,3),
(13,9,3),
(14,10,1),
(15,10,2),
(16,11,2),
(17,12,3),
(18,13,1),
(19,13,3),
(20,14,1),
(21,15,2),
(22,15,1),
(23,16,3),
(24,17,3),
(25,18,1),
(26,18,2),
(27,19,2),
(28,19,3),
(29,19,1),
(30,20,3);

-- 学習言語テーブル
DROP TABLE IF EXISTS languages;

CREATE TABLE languages (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  language VARCHAR(255) NOT NULL COMMENT "学習言語",
  color VARCHAR(10) NOT NULL COMMENT "配色指定" 
)CHARSET=utf8;

INSERT INTO languages VALUES
(1,'HTML','#0042e5'),
(2,'CSS','#0070B9'),
(3,'JavaScript','#01BDDB'),
(4,'PHP','#02CDFA'),
(5,'Laravel','#B29DEE'),
(6,'SQL','#6C43E5'),
(7,'SHELL','#460AE8'),
(8,'情報システム基礎知識(その他)','#2C00B9');

-- 学習コンテンツテーブル
DROP TABLE IF EXISTS contents;

CREATE TABLE contents (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  content VARCHAR(255) NOT NULL COMMENT "学習コンテンツ",
  color VARCHAR(10) NOT NULL COMMENT "配色指定" 
)CHARSET=utf8;

INSERT INTO contents VALUES
(1,'N予備校','#0042e5'),
(2,'ドットインストール','#0070B9'),
(3,'POSSE課題','#01BDDB');