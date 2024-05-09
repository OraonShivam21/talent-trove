const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();
require("dotenv").config();

const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
