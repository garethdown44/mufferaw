var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var colors = require('colors/safe');
var moment = require('moment');

app.listen(8081);

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

    var message = colors.error('[' + data.level + '] ') + colors.grey(date) + ': ' + data.message;

    switch (data.level) {
      case 'info':
        console.info(message);
        break;
    }
  });
});