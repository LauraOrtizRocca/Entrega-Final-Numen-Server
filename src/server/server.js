const express = require('express');
const router = require('../routes/routes');
const server = express()
const cookieParser = require ('cookie-parser');
server.use(express.json());
server.use('/api', router);
server.use(cookieParser());

module.exports = server;



