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

CREATE TABLE orderpart 
(
    PARTID INT(4) NOT NULL PRIMARY KEY,
    itemquan INT(2) NOT NULL,
    tweight FLOAT(6) NOT NULL,
    tcost FLOAT(6) NOT NULL,
    ordernum INT(5) AUTO_INCREMENT,
    custname VARCHAR(25) NOT NULL
);
