DROP DATABASE IF EXISTS friends_db;
CREATE DATABASE friends_db;

USE friends_db;

DROP TABLE IF EXISTS friendslist;

CREATE TABLE friendslist (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(60) NOT NULL,
  image VARCHAR(500) NOT NULL,
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

INSERT INTO friendsList (name, image, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10) VALUES ('Race', 'https:
//www.telegraph.co.uk/content/dam/news/2018/12/19/TELEMMGLPICT000183991953_trans_NvBQzQNjv4Bq8CYWv7bmnYZ51d2hDBu7lebqe2WHyoOY47YRF5kMLEI.jpeg?imwidth=450', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3), ('Crummy Jimmy', 'https:
//www.telegraph.co.uk/content/dam/news/2018/12/19/TELEMMGLPICT000183991953_trans_NvBQzQNjv4Bq8CYWv7bmnYZ51d2hDBu7lebqe2WHyoOY47YRF5kMLEI.jpeg?imwidth=450', 1, 2, 5, 5, 2, 3, 1, 5, 1, 2), ('Skinny Pam', 'https:
//www.telegraph.co.uk/content/dam/news/2018/12/19/TELEMMGLPICT000183991953_trans_NvBQzQNjv4Bq8CYWv7bmnYZ51d2hDBu7lebqe2WHyoOY47YRF5kMLEI.jpeg?imwidth=450', 5, 5, 5, 5, 5, 5, 5, 5, 5, 5), ('Bobby Goober', 'https:
//www.telegraph.co.uk/content/dam/news/2018/12/19/TELEMMGLPICT000183991953_trans_NvBQzQNjv4Bq8CYWv7bmnYZ51d2hDBu7lebqe2WHyoOY47YRF5kMLEI.jpeg?imwidth=450', 3, 2, 1, 2, 3, 3, 5, 4, 4, 2);