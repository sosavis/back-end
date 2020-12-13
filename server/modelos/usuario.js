const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// ---------- [validamos roles]
let rolesValidos={
    values:['ADMIN_ROLE','USER_ROLE'],
    message: "{VALUE} no es un rol válido",
}

let Schema=mongoose.Schema //seria como una clase

let usuarioSchema = new Schema ({

    nombre: {
        type: String,
        required:[true, "Campo necesario"],
        trim: true,
    },
    email: {
        type: String,
        required:[ true, "Campo necesario"],
        trim: true,
        unique: true,
    },
    //ver paquete para manejar el unique mongoose-unique-validator
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos,
        trim: true,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    creado: {
        type: Date,
        default: Date.now(),
    }
})


usuarioSchema.plugin(uniqueValidator,{
    message:'{PATH} debe ser único' //en este caso dirá -> email debe ser único
})

usuarioSchema.methods.toJSON=function() {
    let user=this
    let userObject=user.toObject()
    delete userObject.password
    return userObject
}

//para exportar el modelo con dos parámetros (nombre, nombre esquema)
module.exports = mongoose.model("Usuario", usuarioSchema)


