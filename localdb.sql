--create db
CREATE DATABASE IF NOT EXISTS `local`;
USE `local`;

--create table quantity and create a foreign key to link
CREATE TABLE 'quantity'
(
    'qty' INT(5) NOT NULL,
    'number' int(11) NOT NULL PRIMARY KEY,
);

--show table
--SELECT * FROM 'quantity';