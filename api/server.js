const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// apply default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// use JSON Server’s router — typical REST API
server.use('/api', router);

// export handler for Vercel serverless
module.exports = server;
