SELECT * from project;

CREATE TABLE author (
	idAuthor int auto_increment primary key,
    name varchar(45) not null,
    job varchar(45) not null,
    photo text
);

ALTER TABLE author MODIFY photo TEXT NOT NULL;

ALTER TABLE project DROP COLUMN author, DROP COLUMN job, DROP COLUMN photo;

select * from project;
select * from author;

INSERT INTO author (name, job, photo)
VALUES		('Juan Perez', 'Fullstack developer', 'https://i.blogs.es/2172ad/1366_2000/450_1000.webp'),
			("Pepa Jeison",
			"UX Designer",
			"https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"),
            ("Maricarmen",
			"UX - UI Designer",
			"https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"),
            ("Alexandra Sasha Pryakhina",
			"Designer",
			"https://cdn.dribbble.com/users/3344616/avatars/normal/ecebaceeb5872d6afcdf04e4c73c8f38.png?1683199928"),
            ("Mila Garet",
			"Typographer",
			"https://d3ui957tjb5bqd.cloudfront.net/images/users/278/2781/2781969/avatar-75-75-r.jpg?1661853722"),
            ("Nicky Laatz",
			"Graphic Designer",
			"https://cdn.dribbble.com/users/48541/avatars/normal/69cfae565cf79b76d879e30befb39d0a.jpg?1647000968"),
            ("Sergio Casas",
			"Designer",
			"https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"),
            ("Tyler Pate",
			"Illustraor & Designer",
			"https://cdn.dribbble.com/users/508142/avatars/normal/1cffa29a3f16e934e3b310ce18ad2c6d.jpg?1696372002");


            