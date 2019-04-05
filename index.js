const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./project/project-router.js');
const actionRouter = require('./action/action-router.js');
const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/project', projectRouter);
server.use('/api/action', actionRouter);

const port = 3500;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
