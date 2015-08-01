module.exports = function(addr) {
  var socket = require('socket.io-client')(addr);

  var send = function(level, message) {
    socket.emit('log', { level: level, message: message, date: new Date() });
  };

  return send;
};