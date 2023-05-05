const UsuarioModel = require('../../models/usuariosbiblioteca.models');

const getUserByUsernameService = async (req) => {
    const { username } = req.body;
    return UsuarioModel.findOne({username: username});
}

module.exports = getUserByUsernameService
