// Send `Alive` Command
exports.alive = function(port) {
  const aliveCommand = [2, 72, 3];
  port.write(aliveCommand, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port:');
    console.log(aliveCommand);
  });
};

// Send `Get Frame` Command
exports.getFrame = function(port) {
  const getFrameCommand = [2, 19, 3];
  port.write(getFrameCommand, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port:');
    console.log(getFrameCommand);
  });
};

// Send `Motor Start` Command
exports.startMotor = function(port) {
  const motorStartCommand = [2, 16, 1, 3];
  port.write(motorStartCommand, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port:');
    console.log(motorStartCommand);
  });
};

// Send `Motor Stop` Command
exports.stopMotor = function(port) {
  const motorStopCommand = [2, 16, 0, 3];
  port.write(motorStopCommand, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port:');
    console.log(motorStopCommand);
  });
};
