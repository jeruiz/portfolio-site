CREATE DATABASE beers;

CREATE USER 'beers'@'localhost' IDENTIFIED WITH mysql_native_password BY 'b33r5';

GRANT ALL ON beers.* TO 'beers'@'localhost';

USE beers;

CREATE TABLE styles (
    id INT auto_incement,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE breweries (
    id INT auto_increment,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);

CREATE TABLE beers (
    id INT auto_incement,
    name VARCHAR(255) NOT NULL,
    breweryId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY(breweryId) REFERENCES breweries(id)
);

CREATE TABLE beersStyles (
    beerId INT,
    styleId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(beerId, styleId),
    FOREIGN KEY(beerId) REFERENCES beers(id),
    FOREIGN KEY(styleId) REFERENCES styles(id)
);

INSERT INTO styles (name) VALUES ('IPA');
INSERT INTO styles (name) VALUES ('Pale Ale');
INSERT INTO styles (name) VALUES ('Stout');


INSERT INTO breweries (name) VALUES ('Bells');
INSERT INTO breweries (name) VALUES ('Russian River');
INSERT INTO breweries (name) VALUES ('Sierra Nevada');
INSERT INTO breweries (name) VALUES ('Founders');
INSERT INTO breweries (name) VALUES ('The Alchemist');
INSERT INTO breweries (name) VALUES ('WeldWerks');


INSERT INTO beers (name, breweryId) VALUES ('Two Hearted Ale', 1);
INSERT INTO beers (name, breweryId) VALUES ('Pliny the Elder', 2);
INSERT INTO beers (name, breweryId) VALUES ('Pale Ale', 3);
INSERT INTO beers (name, breweryId) VALUES ('KBS(Kentucky Breakfast Stout)', 4);
INSERT INTO beers (name, breweryId) VALUES ('Heady Topper', 5);
INSERT INTO beers (name, breweryId) VALUES ('CBS(Canadian Breakfast Stout', 4));
INSERT INTO beers (name, breweryId) VALUES ('All Day IPA', 4);
INSERT INTO beers (name, breweryId) VALUES ('Hopslam', 1);
INSERT INTO beers (name, breweryId) VALUES ('Breakfast Stout', 4);
INSERT INTO beers (name, breweryId) VALUES ('Juicy Bits', 6);


INSERT INTO beersStyles (beerId, styleId) VALUES (1, 1);
INSERT INTO beersStyles (beerId, styleId) VALUES (2, 1);
INSERT INTO beersStyles (beerId, styleId) VALUES (3, 2);
INSERT INTO beersStyles (beerId, styleId) VALUES (4, 3);
INSERT INTO beersStyles (beerId, styleId) VALUES (5, 1);
INSERT INTO beersStyles (beerId, styleId) VALUES (6, 3);
INSERT INTO beersStyles (beerId, styleId) VALUES (7, 1);
INSERT INTO beersStyles (beerId, styleId) VALUES (8, 1);
INSERT INTO beersStyles (beerId, styleId) VALUES (9, 3);
INSERT INTO beersStyles (beerId, styleId) VALUES (10, 1);
