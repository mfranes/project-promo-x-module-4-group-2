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

SELECT * from project;

CREATE TABLE author (
	idAuthor int auto_increment primary key,
    name varchar(45) not null,
    job varchar(45) not null,
    photo text
);
INSERT INTO project (name,slogan,technologies,repo,demo,descr,author,job,image,photo)
values('cocktail database','find your drink','html css js','https://github.com/Adalab/modulo-2-evaluacion-final-ellisoalgo','http://beta.adalab.es/modulo-2-evaluacion-final-ellisoalgo/',
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ultrices ipsum',
'Juan Perez','developer full-stack','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBcB86qBAva87kAWryrFqbvEUJWOyUp9GSg&s',
'https://i.blogs.es/2172ad/1366_2000/450_1000.webp'),
("Gravity Screen",
        "Responsive Design",
        "Figma - HTML - CSS",
       "https://github.com",
        "https://google.com",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
       "Pepa Jeison",
       "UX Designer",
       "https://www.pixeden.com/media/k2/galleries/1383/001-devices-presentation-app-screens-project-showcase-graphic-psd-mockup.jpg",
	   "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"),
       ("Abstract",
         "Project Presentation Scene",
         "HTML - SCSS - JS",
         "https://github.com",
         "https://google.com",
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
         "Maricarmen",
         "UX - UI Designer",
         "https://images.pixeden.com/images/abstract-ui-project-scene-mockup-3_full_preview_retina.jpg",
         "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"),
         ( "Nostalgia",
           "Retro Designs",
           "Adobe Suite - JS - HTML",
           "https://github.com",
         "https://dribbble.com/shots/17356647-Nostalgia",
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
        "Alexandra Sasha Pryakhina",
        "Designer",
         "https://cdn.dribbble.com/users/3344616/screenshots/17356647/media/eb2cf135bd1532868019917c06760f85.png?resize=1600x1200&vertical=center",
         "https://cdn.dribbble.com/users/3344616/avatars/normal/ecebaceeb5872d6afcdf04e4c73c8f38.png?1683199928"),
         (
         "Milkshake Script Font",
         "Modern handwritten script",
        "Adobe suite",
        "https://github.com",
		"https://google.com",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
        "Mila Garet",
         "Typographer",
        "https://cdn.dribbble.com/userupload/9938969/file/original-739b1cfebafdc2a5d748dee42cb0a95f.jpg?resize=1504x1003",
         "https://d3ui957tjb5bqd.cloudfront.net/images/users/278/2781/2781969/avatar-75-75-r.jpg?1661853722"),
         (  "Eighties Comeback",
        "A beautifully retro typeface",
         "Adobe Suite - JS - HTML",
         "https://github.com",
        "https://google.com",
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
       "Nicky Laatz",
        "Graphic Designer",
         "https://cdn.dribbble.com/users/48541/screenshots/17862119/media/65fa42866c12ecb8c6369ddc353fd233.jpg?resize=1600x1200&vertical=center",
        "https://cdn.dribbble.com/users/48541/avatars/normal/69cfae565cf79b76d879e30befb39d0a.jpg?1647000968"),
        ( "Apple Presentation",
         "Alternative iPhone presentation",
       "Photoshop",
         "https://github.com",
         "https://google.com",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis.",
         "Sergio Casas",
         "Designer",
         "https://www.pixeden.com/media/k2/galleries/1383/001-devices-presentation-app-screens-project-showcase-graphic-psd-mockup.jpg",
         "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"),
         ( "Make Friends, Eat Bagels",
           "Message by the Creative Pain",
           "Adobe Illustrator",
           "https://github.com",
           "https://google.com",
           "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
		   "Tyler Pate",
        "Illustraor & Designer",
         "https://cdn.dribbble.com/userupload/14615426/file/original-8eb64ce9f964eccb43a6743a2d209f20.jpg?resize=1504x1128",
        "https://cdn.dribbble.com/users/508142/avatars/normal/1cffa29a3f16e934e3b310ce18ad2c6d.jpg?1696372002");
select * from project;
UPDATE  project set slogan = 'iPhone presentation' where idProject =7;

ALTER TABLE project ADD COLUMN fkAuthor INT;
ALTER TABLE project ADD FOREIGN KEY (fkAuthor)
REFERENCES author (idAuthor);

SELECT project.name, author.name
FROM project INNER JOIN author ON project.fkAuthor = author.idAuthor;

SELECT * FROM author;


