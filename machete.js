//

/*
git init
git remote add origin https://github.com/sosavis/back-end.git
git remote -v
git push origin master (del local al remoto en github)

----
despues de trabajar
git status
git add .
git commit -m "mensaje"
git push origin master

= - = - = - = - = - = -
ejecutar server, en la terminal de visualcode
node server/server.js --o--  node server/server

paquete de npm: nodemon -  lo instalamos de forma global: 
npm install -g nodemon
para llamarlo: nodemon server/server *** CADA VEZ QUE QUEREMOS LEVANTAR EL SERVER ***
vamos instalar paquete body-parser que es un middleware
funcion que tiene accceso a la solicitud (req)  y a la respuesta (res)
el body-parser analiza el cuerpo de la solicitud entrante y capturamos ese 
cuerpo con la expresion req.body
npm install body-parser --save (con --save queda incorporado en el proyecto cuando 
otro haga npm install)
para usarlo lo importamos en nuestro archivo .js
const bodyParser = require('body-parser')

estas lineas de codigo es como lo vamos a usar antes de la peticion GET
// parse application/x-www-form-urlencoded --- de la documentación
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json --- de la documentación
app.use(bodyParser.json())


para importar un archivo en node usamos:
    require('./config/config')
van todos los require al ppio del archivo 


en postman->environment 
ADD / nombre:Desarrollo / variable:url / Initial value:localhost:3005

instalamos mongoose es una herramienta de modelado de objetos de MongoDB
está diseñada para funcionar en un entorno asincrono
$ npm install mongoose --save
para ver que version tenemos:??
despues lo importo:  
    const mongoose = require('mongoose');

hacemos la conexion con MongoDB
** mongo funciona en el puerto 27017 **
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true

}, (err,res) => {
  if(err) throw err;
  console.log ('base de datos online')
} 
);

como pasamos las rutas get post etc a usuario.js, tenemos que importar express
const express = require("express");
en usuario,js al final exporto en node la app con la que hago todas las peticiones
    module.exports = app

y en server.js, agrego : 
    app.use(require('./routes/usuario'))

modelo, objeto de mongoose que nos permite realizar inserciones, actualizacones etc en MongoDB
para cada tabla definimos un modelo (atributos)


// ********* mongoose-unique-validator ********* //
npm install --save mongoose-unique-validator
para usarlo en el modelo lo llamo:
  const uniqueValidator= require('mongoose-unique-validator')
cómo se usa?:
  usuarioSchema.plugin(uniqueValidator,{
      message:'{PATH} debe ser único'
  })

// ********* encriptación de contraseñas ********* //

node.bcrypt.js
npm install bcrypt --save

const bcrypt=require('bcrypt') //para encriptar contraseña
lo usamos en: 
 password: bcrypt.hashSync(body.password, 10), //esto es 10 veces hasheamos/encriptamos la contraseña

antes del module.exports..:
usuarioSchema.methods.toJSON=function() {
    let user=this
    let userObject=user.toObject()
    delete userObject.password
    return userObject
} 
*/

