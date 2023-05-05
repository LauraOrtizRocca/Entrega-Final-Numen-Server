const getUserAxiosService = require ("../services/axios/getUsersAxiosService")

const getUserAxiosController = async (req, res) => {
    try {
        const users = await getUserAxiosService();
        res.json({respuesta:users})
    } catch (error) {
        console.log(error);
        res.json({message: error.message})
    }
}
module.exports = getUserAxiosController
