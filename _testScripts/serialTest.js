var SerialPort = require("serialport");
var port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 9600,
  parser: SerialPort.parsers.raw
});

port.on('open', function() {
  console.log('Serial port open');
  port.write('TeSt-StRiNg', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written to serial port');
  });
});

port.on('error', function(err) {
  console.log('Error: ', err.message);
})

port.on('data', function (data) {
  console.log('Data Recieved on serial port: ' + data);
//  port.close();
//  console.log('Port Closed');
});
