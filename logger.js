module.exports = function(addr) {

  var sender = require('./socket-sender')(addr);

  var logger = {};

  logger.info = function (text) {
    sender('info', text);
  }

  logger.debug = function (text) {
    sender('debug', text);
  };  

  logger.warn = function (text) {
    sender('warn', text);
  };

  logger.error = function (text) {
    sender('error', text);
  };

  return logger;
}