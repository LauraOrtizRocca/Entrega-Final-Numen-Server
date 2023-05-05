const UsuarioModel = require('../../models/usuariosbiblioteca.models')


const addUserService = async (req) => {
    const user = req.body;
    const newUser = new UsuarioModel(user);
    await newUser.save();
    return user;
}

module.exports = addUserService;