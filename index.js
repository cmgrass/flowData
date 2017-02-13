// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Define external object
var exports = module.exports = {};
  
// Open a serial port 
exports.serialPort = require('serialport')
exports.myPort = new exports.serialPort('/dev/ttyUSB0', {
  baudRate: 9600,
  parser: exports.serialPort.parsers.byteDelimiter(3)
});

// Port open event with callback function.
// Port open event will always be emitted. 
exports.myPort.on('open', function() {
  console.log('Serial port open');
});

// Create Main Page Buttons.
// Require command scripts
var serialCommand = require('./serialCommand.js');

// Create button to send alive command.
var aliveButton = document.createElement('button')
aliveButton.textContent = 'Send Alive Command'
aliveButton.addEventListener('click', serialCommand.sendAlive())
document.body.appendChild(aliveButton)

// Create button to send data request command.
//var getDataButton = document.createElement('button')
//getDataButton.textContent = 'Get Data'
//document.body.appendChild(getDataButton)

exports.myPort.on('error', function(err) {
  console.log('Error: ', err.message);
});

exports.myPort.on('data', function(data) {
  console.log('Data Received on serial port: ' + data);
});
