const express = require("express");

//---encriptar contraseñas
const bcrypt = require("bcrypt");
//---------------------------

const _=require('underscore') // importacion unserscore para validaciones de put

const app = express();

const Usuario = require("../modelos/usuario");

// ----------------- [método GET] ----------------- //
app.get("/usuario", function (req, res) {
  //req (solicitud) res (respuesta)
  let desde=req.query.desde || 0
  desde=Numbre(desde)
  let limite=req.query.limite || 5
  limite=Numbre(limite)

  Usuario.find({})
  .skip(desde) //muestra a partir del desde" registro, los registros indicados en limit(limite)
  .limit(limite) //limita la cant de reg que muestra

  .exec((err,usuarios)=>{
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    Usuario.count({},(err,conteo)=>{

      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      } // del if(err)

      res.json({
        ok:true,
        usuarios,
        cantidad: conteo
      })
    }) //del res.json


  }) //del exec
});

// ----------------- [método POST] ----------------- //
app.post("/usuario", function (req, res) {
  //req (solicitud) res (respuesta)

  let body = req.body;

  //crear instancia del modelo Usuario
  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  usuario.save((err, usuarioDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      usuario: usuarioDB,
    });
  });

  
});


// ----------------- [método PUT] ----------------- //

 //PUT
  app.put("/usuario/:id", function (req, res) {
    
    // //req (solicitud) res (respuesta)
    let id=req.params.id
    //let body=req.body
    //usamos pick para saber cuales campos voy a poder actualizar del body
    let body=_.pick(req.body,['nombre', 'email', 'img','role','estado'])

    Usuario.findByIdAndUpdate(id,body,{new:true, runValidators:true},(err, usuarioDB)=>{
      if (err) {
        return res.status(400).json ({
          ok:false,
          err,
        })
      }
      res.json ({
        ok:true,
        usuario: usuarioDB,
      })
    })

    

  });

app.delete("/usuario", function (req, res) {
  //req (solicitud) res (respuesta)
  res.json({
    message: "DELETE usuario",
  });
});

module.exports = app;