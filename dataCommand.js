// Send Data Command
exports.send = function(port) {
  const dataCommand = [2,19,3];
  port.write(dataCommand, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port: ' + dataCommand);
  });
};
