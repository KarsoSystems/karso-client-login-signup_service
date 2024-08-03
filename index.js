require('dotenv').config();
const serverless = require('serverless-http')
const Server = require('./models/server');


const server = new Server();


server.listen();
module.exports.handler = serverless(server.app)