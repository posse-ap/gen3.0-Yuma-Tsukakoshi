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
(1,'2022-01-01','2'), 
(2,'2022-01-03','2.5'), 
(3,'2022-01-06','1.5'), 
(4,'2022-01-08','4'), 
(5,'2022-01-12','4.5'), 
(6,'2022-01-13','2'), 
(7,'2022-01-14','1.5'), 
(8,'2022-01-15','2'), 
(9,'2022-01-17','2.5'), 
(10,'2022-01-17','3.5'), 
(11,'2022-01-19','1.5'), 
(12,'2022-01-19','2'), 
(13,'2022-01-19','1'), 
(14,'2022-01-21','2.5'), 
(15,'2022-01-24','3'), 
(16,'2022-01-25','1.5'), 
(17,'2022-01-25','0.5'), 
(18,'2022-01-25','3'), 
(19,'2022-01-27','1.5'), 
(20,'2022-01-29','2'); 


-- 学習言語勉強記録テーブル
DROP TABLE IF EXISTS record_languages;

CREATE TABLE record_languages(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  language_id INT NOT NULL COMMENT "学習言語ID",
  hours FLOAT NOT NULL COMMENT "学習時間",
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT "作成日時",
  updataed_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT "更新日時"
)CHARSET=utf8;

INSERT INTO record_languages(id, language_id, hours) VALUES 
(1,1,1.5),
(2,3,2.5),
(3,1,1.5),
(4,2,0.5),
(5,1,1.5),
(6,3,1.0),
(7,3,2.5),
(8,3,1.0),
(9,3,1.5),
(10,2,0.5),
(11,1,1.0),
(12,3,1.5),
(13,3,2.5),
(14,1,1.5),
(15,2,1.5),
(16,2,1.0),
(17,3,4.5),
(18,1,1.5),
(19,3,4.0),
(20,1,1.5);

-- 学習コンテンツ勉強記録テーブル
DROP TABLE IF EXISTS record_contents;

CREATE TABLE record_contents(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  content_id INT NOT NULL COMMENT "学習コンテンツID",
  hours FLOAT NOT NULL COMMENT "学習時間",
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT "作成日時",
  updataed_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT "更新日時"
)CHARSET=utf8;

INSERT INTO record_contents(id, content_id, hours) VALUES 
(1,1,1.5),
(2,3,2.5),
(3,1,1.5),
(4,2,0.5),
(5,6,1.5),
(6,6,1.0),
(7,4,2.5),
(8,4,1.0),
(9,3,1.5),
(10,2,0.5),
(11,6,1.0),
(12,6,1.5),
(13,3,2.5),
(14,2,1.5),
(15,3,1.5),
(16,2,1.0),
(17,4,4.5),
(18,6,1.5),
(19,5,4.0),
(20,1,1.5);

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