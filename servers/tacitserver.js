//var tacitServer = require('tacit-server');


/*
* CONFIGS - The Configurations
*/
config = require('../configs/server.js');
var configs = config.configs,
server_prefix = configs.server_prefix || 'BITS';

console.log(server_prefix + " - Node Version: " + process.version);
