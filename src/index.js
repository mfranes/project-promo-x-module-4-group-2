//configuración
const express = require("express");
const cors = require("cors");
const server = express();
server.use(cors());
server.use(express.json({limit: '25mb'}));

const PORT = 3001;
server.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
});

//rutas endpoints -> API
const staticUrl = "./src/public";
server.use(express.static(staticUrl));

//servidores de estáticos
