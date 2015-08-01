var logger = require('mufferaw')('http://localhost:8082');
var $ = require('jquery');

$(function() {

  $('#error-button').click(function(e) {
    logger.error('an error occurred');
  });

  $('#info-button').click(function(e) {
    logger.info('you clicked a button');
  });

  $('#debug-button').click(function(e) {
    logger.debug('some debug information');
  });
});