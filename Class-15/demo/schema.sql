DROP TABLE IF EXISTS favrecipe;
CREATE TABLE IF NOT EXISTS favrecipe(
id SERIAL PRIMARY KEY ,
title varchar(255),
readyinminutes varchar(255),
image varchar(255),
summary varchar(255)
);

