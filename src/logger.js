var sender = require('./socket-sender')('http://localhost:8082');

var logger = module.exports;

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