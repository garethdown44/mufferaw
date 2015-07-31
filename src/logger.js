var sender = require('./socket-sender');

var logger = module.exports;

logger.info = function (text) {
  sender('info', text);
}

logger.debug = function (text) {
  sender('debug', text)
};