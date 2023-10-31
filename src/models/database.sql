CREATE DATABASE cartManagement;
use cartManagement;

CREATE TABLE Product (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `description` VARCHAR(100),
    `short_desc` VARCHAR(30),
    `name` VARCHAR(100) NOT NULL,
    `price` DECIMAL(6,2) NOT NULL
);

CREATE TABLE Cart (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `mail_user` varchar(40) NOT NULL,
    `sub_total` DECIMAL(6,2) DEFAULT 0,
    `discounts` DECIMAL(6,2) DEFAULT 0,
    `taxes` DECIMAL(6,2) DEFAULT 0,
    `total` DECIMAL(6,2) DEFAULT 0,
    `product_id` int NOT NULL,
    FOREIGN KEY (`product_id`) REFERENCES Product(`id`)
);

INSERT INTO cartManagement.Product (description, short_desc, name, price)
VALUES ('Lorem ipsum dolor sit amet, consectetur', 'Lorem ipsum', 'Lorem I', 2.00); 

INSERT INTO cartManagement.Product (description, short_desc, name, price)
VALUES ('Lorem ipsum dolor sit amet, sit amet', 'Lorem ipsum', 'Lorem II', 0.25); 

INSERT INTO cartManagement.Product (description, short_desc, name, price)
VALUES ('Lorem ipsum dolor sit amet, lorem', 'Lorem ipsum', 'Lorem III', 2.75); 

INSERT INTO cartManagement.Product (description, short_desc, name, price)
VALUES ('Lorem ipsum dolor sit amet, ipsum', 'Lorem ipsum', 'Lorem IV', 3.00); 

INSERT INTO cartManagement.Cart (mail_user, product_id )
VALUES ('user@domain.com', 1); 

