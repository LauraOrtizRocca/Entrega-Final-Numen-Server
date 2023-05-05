const axios = require("axios")
const getUserAxiosService = async () => {
   try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      return response.data;
   } catch (error) {
      console.log('Error en axios - ', error.message)
   }
}
module.exports = getUserAxiosService