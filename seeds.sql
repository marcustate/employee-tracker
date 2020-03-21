DROP DATABASE IF EXISTS employeesDB;
CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE department
(
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    TITLE VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role
(
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    TITLE VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee
(
    id INT NOT NULL auto_increment,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    TITLE VARCHAR(30) NULL,
    PRIMARY KEY (id)
);   

INSERT INTO department (first_name, last_name, TITLE)
VALUES ('Josh', 'Johnsoon', 'Salesperson'), ('Ashley', 'Booth', 'Salesperson'), ('Donovan', 'Stewart', 'Manager'), ('Lewis', 'Andrews', 'Engineer'), ('Marquis', 'Howard', 'Lawyer'), ('Alexander', 'Jackson', 'Engineer'),('Patrick', 'Ray', 'Engineer'), ('Brandon', 'Kay', 'Legal'), ('Greg', 'Washington', 'Finance'),('Zach', 'Sanchez', 'Human Resources');
