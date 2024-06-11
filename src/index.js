//configuración
const express = require("express");
const cors = require("cors");
const mysql = require('mysql2/promise');
const server = express();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require ("dotenv").config();
server.use(cors());
server.use(express.json({limit: '25mb'}));
server.set("view engine","ejs");

const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
});

async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });
  await connection.connect();
  return connection;
}

/*
const fakeData = [
    {
        "name": "Gravity Screen",
        "slogan": "Responsive Design",
        "technologies": "Figma - HTML - CSS",
        "repo": "https://github.com",
        "demo": "https://google.com",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
        "autor": "Pepa Jeison",
        "job": "UX Designer",
        "image": "https://www.pixeden.com/media/k2/galleries/1383/001-devices-presentation-app-screens-project-showcase-graphic-psd-mockup.jpg",
        "photo": "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
      },
      {
        "name": "Abstract",
        "slogan": "Project Presentation Scene",
        "technologies": "HTML - SCSS - JS",
        "repo": "https://github.com",
        "demo": "https://google.com",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
        "autor": "Maricarmen",
        "job": "UX - UI Designer",
        "image": "https://images.pixeden.com/images/abstract-ui-project-scene-mockup-3_full_preview_retina.jpg",
        "photo": "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg"
      },
      {
        "name": "Nostalgia",
        "slogan": "Retro Designs",
        "technologies": "Adobe Suite - JS - HTML",
        "repo": "https://github.com",
        "demo": "https://dribbble.com/shots/17356647-Nostalgia",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
        "autor": "Alexandra Sasha Pryakhina",
        "job": "Designer",
        "image": "https://cdn.dribbble.com/users/3344616/screenshots/17356647/media/eb2cf135bd1532868019917c06760f85.png?resize=1600x1200&vertical=center",
        "photo": "https://cdn.dribbble.com/users/3344616/avatars/normal/ecebaceeb5872d6afcdf04e4c73c8f38.png?1683199928"
      },
      {
        "name": "Milkshake Script Font",
        "slogan": "Modern handwritten script",
        "technologies": "Adobe suite",
        "repo": "https://github.com",
        "demo": "https://google.com",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
        "autor": "Mila Garet",
        "job": "Typographer",
        "image": "https://cdn.dribbble.com/userupload/9938969/file/original-739b1cfebafdc2a5d748dee42cb0a95f.jpg?resize=1504x1003",
        "photo": "https://d3ui957tjb5bqd.cloudfront.net/images/users/278/2781/2781969/avatar-75-75-r.jpg?1661853722"
      },
      {
        "name": "Eighties Comeback",
        "slogan": "A beautifully retro typeface",
        "technologies": "Adobe Suite - JS - HTML",
        "repo": "https://github.com",
        "demo": "https://google.com",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
        "autor": "Nicky Laatz",
        "job": "Graphic Designer",
        "image": "https://cdn.dribbble.com/users/48541/screenshots/17862119/media/65fa42866c12ecb8c6369ddc353fd233.jpg?resize=1600x1200&vertical=center",
        "photo": "https://cdn.dribbble.com/users/48541/avatars/normal/69cfae565cf79b76d879e30befb39d0a.jpg?1647000968"
      },
      {
        "name": "Apple Presentation",
        "slogan": "Alternative iPhone presentation",
        "technologies": "Photoshop",
        "repo": "https://github.com",
        "demo": "https://google.com",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis.",
        "autor": "Sergio Casas",
        "job": "Designer",
        "image": "https://www.pixeden.com/media/k2/galleries/1383/001-devices-presentation-app-screens-project-showcase-graphic-psd-mockup.jpg",
        "photo": "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
      },
      {
        "name": "Make Friends, Eat Bagels",
        "slogan": "Message by the Creative Pain",
        "technologies": "Adobe Illustrator",
        "repo": "https://github.com",
        "demo": "https://google.com",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare vulputate tellus, vel luctus dolor suscipit quis. Etiam vestibulum lectus sagittis, sagittis ligula quis, viverra ligula.",
        "autor": "Tyler Pate",
        "job": "Illustraor & Designer",
        "image": "https://cdn.dribbble.com/userupload/14615426/file/original-8eb64ce9f964eccb43a6743a2d209f20.jpg?resize=1504x1128",
        "photo": "https://cdn.dribbble.com/users/508142/avatars/normal/1cffa29a3f16e934e3b310ce18ad2c6d.jpg?1696372002"
      }
];
*/

//endpoint: get data from api
server.get("/getprojects", async (req, res)=>{
  const conn = await connectToDatabase();
  const selectSQL = "SELECT author.name AS autor, author.job, author.photo, project.name, project.slogan, project.technologies, project.repo, project.demo, project.descr, project.image, project.idProject FROM project INNER JOIN author on project.fkAuthor = author.idAuthor;";
  const [results] = await conn.query(selectSQL);
  res.json({ data: results});
  conn.end();
});

//endpoint: registro
server.post("/sign-up", async (req, res)=> {
  // conectar con la BD
  const conn = await connectToDatabase();
  //recoger datos user
  const { email, password } = req.body;
  //comprobar que el user no exixte en la BD
  const selectEmail = 'SELECT * FROM users WHERE email = ?';
  const [emailResult] = await conn.query(selectEmail,[email]);
  //El usuario NO existe ---> INSERT INTO 
  if (emailResult.length === 0){
    const hashedPassword = await bcrypt.hash(password, 10);
  const insertUser =
  'INSERT INTO users (email, password) values (?, ?)';
  const [newUser] = await conn.query(insertUser, [email, hashedPassword]);
  res.status(201).json({ success: true, id: newUser.insertId});
  }
  else {
  res.status(200).json({ success: false, message: 'usuario ya existe'})
  }
  //cerramos la conexión
  conn.end();
  });


//endpoint: post new project
server.post("/newproject", async (req, res)=>{
  try {
    const data = req.body;
    console.log(data);
    const conn = await connectToDatabase();
    const insertAuthor = 'INSERT INTO author (name, job, photo) values (?, ?, ?);';
    const [resultAuthor] = await conn.query(insertAuthor, [data.autor, data.job, data.photo]);
    const insertProject = 'INSERT INTO project (name, slogan, technologies, repo, demo, descr, image, fkAuthor) values (?,?,?,?,?,?,?,?);';
    const [resultProject] = await conn.query(insertProject, [data.name, data.slogan, data.technologies, data.repo, data.demo, data.desc, data.image, resultAuthor.insertId]);
    res.json({
      message: "Project created successfully", 
      url: `http://localhost:3001/project/${resultProject.insertId}`
    });
    conn.end();
  } catch (error){
    console.log(error);
    res.status(400).json({
      message: "Project not created", 
    });
  }
});

//endpoint: pagina detalle:
server.get("/project/:idProject", async (req,res)=>{
  const conn = await connectToDatabase();
  const {idProject}= req.params;
  const selectSQL = "SELECT * FROM project INNER JOIN author on project.fkAuthor = author.idAuthor where idProject=?;";
  const [results]= await conn.query(selectSQL,[idProject]);
  res.render("detail",{project:results[0]});
  conn.end();
});

//endpoint: delete
server.delete("/delete/:idProject", async (req, res)=>{
  const conn = await connectToDatabase();
  const { idProject } = req.params;
  const sql = 'DELETE project, author FROM project JOIN author ON project.fkAuthor = author.idAuthor WHERE idProject = ?;';
 
  const [results] = await conn.query(sql, [idProject]);
  if (results.affectedRows > 0) {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false, message: 'No existe el id ' });
  }

  await conn.end();
})

//servidores de estáticos
const staticUrl = "./src/public";
server.use(express.static(staticUrl));

const statiStyle = "./src/css";
server.use(express.static(statiStyle));

const staticImages = "./src/public/assets";
server.use(express.static(staticImages));

