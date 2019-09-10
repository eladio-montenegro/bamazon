DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE Bamazon;

USE bamazon;

CREATE TABLE Products (
item_id int NOT NULL,
product_name varchar(50) NOT NULL,
department_name varchar(50) NOT NULL,
price DECIMAL(4,2) NOT NULL,
stock_quantity int NOT NULL);