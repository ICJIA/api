'use strict';
var path = require('path');

module.exports = function(server) {
  // Install a `/` route that returns server status
 // var router = server.loopback.Router();
  //router.get('/', server.loopback.status());
  //server.use(router);


var router = server.loopback.Router();
  router.get('/status', server.loopback.status());
  // router.get('/', function(req, res) {
  //   res.sendFile(path.join(__dirname + '/../../client/index.html'));
  // });
  server.use(router);





};
