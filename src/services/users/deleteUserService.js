const UsuarioModel = require('../../models/usuariosbiblioteca.models');

const deleteUserService = async (req) => {
    const { username } = req.params;
    const response = await UsuarioModel.deleteOne({username: username});
    if(response.deletedCount == 0) throw new Error(`No se encontró el usuario ${username}.`);
    return username;
}

module.exports = deleteUserService