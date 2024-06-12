//configuración
const express = require("express");
const cors = require("cors");
const mysql = require('mysql2/promise');
const server = express();
require ("dotenv").config();
server.use(cors());
server.use(express.json({limit: '25mb'}));
server.set("view engine","ejs")

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

//endpoint: get data from api
server.get("/getprojects", async (req, res)=>{
  const conn = await connectToDatabase();
  const selectSQL = "SELECT author.name AS autor, author.job, author.photo, project.name, project.slogan, project.technologies, project.repo, project.demo, project.descr, project.image, project.idProject FROM project INNER JOIN author on project.fkAuthor = author.idAuthor ORDER BY project.idProject DESC;";
  const [results] = await conn.query(selectSQL);
  res.json({ data: results});
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
      url: process.env.API_HOST + resultProject.insertId
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
  const selectSQL = "SELECT author.name AS autor, author.job, author.photo, project.name, project.slogan, project.technologies, project.repo, project.demo, project.descr, project.image, project.idProject FROM project INNER JOIN author on project.fkAuthor = author.idAuthor where idProject=?;";
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

const staticImages = "./src/images";
server.use(express.static(staticImages));

