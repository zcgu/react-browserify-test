global.host = 'localhost';
global.port = 3000;

var app = require('./app');
app.listen(global.port || 8080, function() {
  console.log("Node app is running at:", global.port || 8080)
})