// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Open a serial port 
var serialPort = require('serialport');
var myPort = new serialPort('/dev/ttyUSB0', {
  baudRate: 9600,
  parser: serialPort.parsers.byteDelimiter(3)
});

// Port open event with callback function.
// Port open event will always be emitted. 
myPort.on('open', function() {
  console.log('Serial port open');
});

// Require serial modules
const aliveCommand = require('./aliveCommand.js');

// Create Main Page Buttons.
// Create button to send alive command.
var aliveButton = document.createElement('button')
aliveButton.textContent = 'Send Alive Command'
aliveButton.addEventListener('click', function() {
  aliveCommand.send(myPort);
  console.log('Button clicked');
})
document.body.appendChild(aliveButton)

// Create button to send data request command.
//var getDataButton = document.createElement('button')
//getDataButton.textContent = 'Get Data'
//document.body.appendChild(getDataButton)

myPort.on('error', function(err) {
  console.log('Error: ', err.message);
});

myPort.on('data', function(data) {
  console.log('Data Received on serial port: ' + data);
  myPort.close();
  console.log('Port closed');
});
