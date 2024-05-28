CREATE DATABASE Project_module_4;
USE Project_module_4;

CREATE TABLE project (
idProject int auto_increment not null primary key,
name varchar (30) not null,
slogan varchar (30) not null,
technologies varchar (30) not null,
repo varchar (120) not null,
demo varchar (120) not null,
descr varchar (200) not null,
author varchar (45) not null,
job varchar (45) not null,
image text not null,
photo text not null
);
