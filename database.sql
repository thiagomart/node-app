
CREATE TABLE Cart (
    `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `mail_user` varchar(40) NOT NULL,
    `subTotal` DECIMAL(6),
    `discounts` DECIMAL(6),
    `taxes` DECIMAL(6),
    `total` DECIMAL(6),
    `ProductId` INT FOREIGN KEY REFERENCES Product(ProductID),
);

CREATE TABLE Product (
    `id` INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `description` VARCHAR(100) NOT NULL,
    `short_desc` VARCHAR(30) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `price` DECIMAL(6) NOT NULL
);