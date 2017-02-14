// Open Serial Port
exports.open = function() {
  var serialPort = require('serialport');
  var myPort = new serialPort('/dev/ttyUSB0', {
    baudRate: 9600,
    parser: serialPort.parsers.byteDelimiter(3)
  });
  return myPort;
}

// Send `Alive` Command
exports.alive = function(port) {
  const aliveCommand = [2, 72, 3];
  serialWrite(port, aliveCommand);
}

// Send `Get Frame` Command
exports.getFrame = function(port) {
  const getFrameCommand = [2, 19, 3];
  serialWrite(port, getFrameCommand);
}

// Send `Motor Start` Command
exports.startMotor = function(port) {
  const motorStartCommand = [2, 16, 1, 3];
  serialWrite(port, motorStartCommand);
}

// Send `Motor Stop` Command
exports.stopMotor = function(port) {
  const motorStopCommand = [2, 16, 0, 3];
  serialWrite(port, motorStopCommand);
}

// Serial Write Function
function serialWrite(port, command) {
  port.write(command, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message); 
    }
    console.log('Message written to serial port:');
    console.log(command);
  });
}
