const { model, Schema } = require('mongoose')

const UsuarioBibliotecaSchema = new Schema({
    username: {
        type: String,
        required: [true, "El nombre de usuario es requerido."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "La contraseña es obligatoria"]
    },
    legajo: { type: Number, default: new Date() },
    administrador: { type: Boolean, required: true }
})

const UsuarioModel = model("Usuario", UsuarioBibliotecaSchema);

module.exports = UsuarioModel;