// Send Alive Command
exports.send = function(port) {
  const aliveCommand = [2,72,3];
  port.write(aliveCommand, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port: ' + aliveCommand);
  });
};
