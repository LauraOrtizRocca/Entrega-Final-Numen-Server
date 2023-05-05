const app = require('./server/server')
require('./database/db');
require('dotenv').config();
const axios= require ('axios');





const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})




