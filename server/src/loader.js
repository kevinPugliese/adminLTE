const server = require('./config/server');
const db = require('./config/database');
const routes = require('./config/routes');

routes(server);
