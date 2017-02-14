// Require serial port objects
var main = require('./index.js')

// Send Alive Command
sendAlive = function() {
  var aliveCommand = [2,72,3];
  main.myPort.write(aliveCommand, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port: ' + aliveCommand);
  });
};
