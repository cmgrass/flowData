// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Open a serial port 
var serialPort = require('serialport')
var port = new serialPort('/dev/ttyUSB0', {
  baudRate: 9600,
  parser: serialPort.parsers.byteDelimiter(3)
});


// Port open event with callback function.
// Port open event will always be emitted. 
port.on('open', function() {
  console.log('Serial port open');
  var writeData = [2,72,3];
  port.write(writeData, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port: ' + writeData);
  });
});

port.on('error', function(err) {
  console.log('Error: ', err.message);
});

port.on('data', function(data) {
  console.log('Data Received on serial port: ' + data);
  port.close();
  console.log('Port closed');
});
