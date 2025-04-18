CREATE DATABASE IF NOT EXISTS WifiBeta;
USE WifiBeta;

CREATE TABLE ktxdoma (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ktxdomb (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang1beta (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NULL,
    topPosition VARCHAR(50) NULL,
    leftPosition VARCHAR(50) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang1gamma (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang1ncvso5 (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang1ncvso6 (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang1ncvso7 (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang2beta (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang2gamma (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang2ncvso5 (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang2ncvso6 (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang2ncvso7 (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang3beta (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang3gamma (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang4beta (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE tang5beta (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NULL,
    topPosition VARCHAR(10) NULL,
    leftPosition VARCHAR(10) NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;