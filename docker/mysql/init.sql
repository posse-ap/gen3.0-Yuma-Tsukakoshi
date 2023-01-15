DROP DATABASE IF EXISTS posse;
CREATE DATABASE posse;
USE posse;

-- DROP TABLE IF EXISTS questions;
-- CREATE TABLE questions (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   content VARCHAR(255),
--   image VARCHAR(255),
--   supplement VARCHAR(255)
-- ) CHARSET=utf8;

-- DROP TABLE IF EXISTS choices;
-- CREATE TABLE choices (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   question_id INT,
--   name VARCHAR(255),
--   valid boolean,
--   FOREIGN KEY (question_id) REFERENCES questions(id)
-- ) CHARSET=utf8;


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

INSERT INTO study_hours SET date='2022-01-01',hours='2';

-- 学習言語勉強記録テーブル
DROP TABLE IF EXISTS record_languages;

CREATE TABLE record_languages(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  language_id INT NOT NULL COMMENT "学習言語ID",
  hours FLOAT NOT NULL COMMENT "学習時間",
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT "作成日時",
  updataed_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT "更新日時"
)CHARSET=utf8;

INSERT INTO record_languages SET language_id = 1, hours=1.5;

-- 学習コンテンツ勉強記録テーブル
DROP TABLE IF EXISTS record_contents;

CREATE TABLE record_contents(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  content_id INT NOT NULL COMMENT "学習コンテンツID",
  hours FLOAT NOT NULL COMMENT "学習時間",
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT "作成日時",
  updataed_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT "更新日時"
)CHARSET=utf8;

INSERT INTO record_contents SET content_id = 1, hours=1.5;

-- 学習言語テーブル
DROP TABLE IF EXISTS languages;

CREATE TABLE languages (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  language VARCHAR(255) NOT NULL COMMENT "学習言語",
  color VARCHAR(10) NOT NULL COMMENT "配色指定" 
)CHARSET=utf8;

INSERT INTO languages SET language='HTML', color='#0042e5';
INSERT INTO languages SET language='CSS', color='#0070B9';
INSERT INTO languages SET language='JavaScript', color='#01BDDB';
INSERT INTO languages SET language='PHP', color='#02CDFA';
INSERT INTO languages SET language='Laravel', color='#B29DEE';
INSERT INTO languages SET language='SQL', color='#6C43E5';
INSERT INTO languages SET language='SHELL', color='#460AE8';
INSERT INTO languages SET language='情報システム基礎知識(その他)', color='#2C00B9';

-- 学習コンテンツテーブル
DROP TABLE IF EXISTS contents;

CREATE TABLE contents (
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT "ID",
  content VARCHAR(255) NOT NULL COMMENT "学習コンテンツ",
  color VARCHAR(10) NOT NULL COMMENT "配色指定" 
)CHARSET=utf8;

INSERT INTO contents SET content='N予備校', color='#0042e5';
INSERT INTO contents SET content='ドットインストール', color='#0070B9';
INSERT INTO contents SET content='POSSE課題', color='#01BDDB';