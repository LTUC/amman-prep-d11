DROP TABLE IF EXISTS favrecipe;
CREATE TABLE IF NOT EXISTS favrecipe(
id SERIAL PRIMARY KEY ,
title varchar(255),
readyinminutes varchar(255),
image varchar(255),
summary varchar(255)
);


DROP TABLE IF EXISTS authors;
CREATE TABLE IF NOT EXISTS authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS books;
CREATE TABLE IF NOT EXISTS books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  isbn TEXT NOT NULL,
  imgurl VARCHAR(255),
  author_id INTEGER REFERENCES authors(id) ON DELETE CASCADE
);
