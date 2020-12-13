const express = require("express");

const app = express();


//GET
app.get("/usuario", function (req, res) {
    //req (solicitud) res (respuesta)
    res.json({
      message: "GET usuario",
    });
  });
  
  //POST
  app.post("/usuario", function (req, res) {
    //req (require/solicitud) res (response/respuesta)
    let body=req.body
  
    if (body.nombre===undefined) {
      res.status(400).json({
        ok: false,
        message: "nombre es necesario"
      })
    } else {
      res.json({
        // message: "POST usuario",
        persona:body
      });
    }
  });
  
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