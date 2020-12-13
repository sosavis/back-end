const express = require("express");
const bcrypt=require('bcrypt') //para encriptar contraseña

const app = express();

const Usuario = require('../modelos/usuario')

//GET
app.get("/usuario", function (req, res) {
    //req (solicitud) res (respuesta)
    res.json({
      message: "GET usuario",
    });
  });
  
  // -------------- [método POST] -------------- //
  //POST propiedad body y dentro del body el estado (nombre, etc)
  app.post("/usuario", function (req, res) {
    //req (require/solicitud) res (response/respuesta)
    let body = req.body
  
    // creamos instancia del modelo de usuario con los valores que obtengo del body
    let usuario = new Usuario ({
      nombre: body.nombre,
      email: body.email,
      password: bcrypt.hashSync(body.password, 10),
      role: body.role,
    })

    //metodo save de mongoose que recibe un callback como 1º argumento un error y como 2º un usuarioDB
    usuario.save ((err, usuarioDB)=>{

       if (err) {
         return res.status(400).json({
           ok:false,
           err
         })
       }
      
      res.json({
        ok:true,
        usuario: usuarioDB,
      })


    })



    // if (body.nombre === undefined) {
    //   res.status(400).json({
    //     ok: false,
    //     message: "nombre es necesario"
    //   })
    // } else {
    //   res.json({
    //     // message: "POST usuario",
    //     persona:body
    //   });
    // }


  }); //cierra el POST
  
  //PUT
  app.put("/usuario/:id", function (req, res) {
    //req (solicitud) res (respuesta)
    res.json({
      message: "PUT usuario",
    });
  });
  
  //DELETE
  app.delete("/usuario", function (req, res) {
    //req (solicitud) res (respuesta)
    res.json({
      message: "DELETE usuario",
    });
  });

  //esporto la constante app donde estoy haciendo las peticiones
  module.exports=app