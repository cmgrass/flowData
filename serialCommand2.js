// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var serialPort = require('serialport')
var port = new serialPort('/dev/ttyUSB0', {
  baudRate: 9600,
  parser: serialPort.parsers.byteDelimiter([10,13])
});

port.on('open', function() {
  console.log('Serial port open');
  port.write([77,78,77,10,13], function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port');
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
