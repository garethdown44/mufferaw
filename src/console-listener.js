module.exports.run = function(port) {

var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var colors = require('colors/safe');
var moment = require('moment');

console.log('listening on port: ' + port);
app.listen(port);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

// set theme 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

io.on('connection', function (socket) {

  socket.on('log', function (data) {

    var date = moment(data.date).format('HH:mm:ss');

    var message = colors.grey(date) + ': ' + data.message;
    var level = '';

    switch (data.level) {
      case 'info':
        level = colors.info('[' + data.level + '] ');
        break;

      case 'error':
        level = colors.error('[' + data.level + '] ');
        break;

      case 'debug':
        level = colors.debug('[' + data.level + '] ');
        break;

      default:
        level = '[' + data.level + ']';
    }

    console.log(level + message);
  });
});
};