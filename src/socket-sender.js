var socket = require('socket.io-client')('http://localhost:8081');

module.exports = function(level, message) {
  socket.emit('log', { level: level, message: message, date: new Date() });
};