require('./config/config')
// para importar en node usamos require --van primero que nada
//
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();


// parse application/x-www-form-urlencoded --- de la documentación
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json --- de la documentación
app.use(bodyParser.json())

app.use(require('./routes/usuario'))

// creamos conexión con mongoDB
//mongo funciona en el puerto 27017
mongoose.connect('mongodb://localhost:27017/rolling', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true

}, (err,res) => {
  if(err) throw err;
  console.log ('base de datos online')
} 
);




//LISTEN
//process.env.PORT viene el que tome de config
app.listen(process.env.PORT, () => {
  console.log("Genial! estamos online:", process.env.PORT);
});