CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE friendsList (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  question1 INTEGER NOT NULL,
  question2 INTEGER NOT NULL,
  question3 INTEGER NOT NULL,
  question4 INTEGER NOT NULL,
  question5 INTEGER NOT NULL,
  question6 INTEGER NOT NULL,
  question7 INTEGER NOT NULL,
  question8 INTEGER NOT NULL,
  question9 INTEGER NOT NULL,
  question10 INTEGER NOT NULL
);

INSERT INTO friendsList (name, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10) VALUES ('Race', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3);