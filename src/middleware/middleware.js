const UsuarioModel = require('../models/usuariosbiblioteca.models.js');

function validateUser(req, res, next) {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ mensaje: 'Faltan datos del usuario' });
    }
    next();
}

async function isAdmin(req, res, next) {
    const usuario = await UsuarioModel.findOne({ username: req.body.username });
    if (usuario) {
        if (usuario.administrador === true) {
            next();
        } else {
            res.status(403).json({ mensaje: "usuario sin permiso de administrador" });
        }
    }
}

module.exports = { validateUser, isAdmin } 