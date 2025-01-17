const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server.json'); // Caminho para o arquivo JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
