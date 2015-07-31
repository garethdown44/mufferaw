var logger = require('mufferaw');
var $ = require('jquery');

$(function() {

  $('#mybutton').click(function(e) {
    e.preventDefault();

    logger.info('you clicked a button');
  });

});