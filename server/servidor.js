const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.listen(3010,()=>{console.log("Servidor iniciado en el puerto 3010")});