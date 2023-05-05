const UsuarioModel = require('../../models/usuariosbiblioteca.models');

const getUserService = async () => {
    return UsuarioModel.find();
}

module.exports = getUserService