// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// -----Require Modules-----
// Serial module
const serialCommand = require('./serialCommand.js');
const fileWrite = require('./fileWrite.js');

//-----File Writer Management-----
// Create file
var csv = require('ya-csv');
var fs = require('fs');

// Create object to write file
var writer = csv.createCsvStreamWriter(fs.createWriteStream('loggedData.csv'));

//-----Serial Port Management-----
// Open a serial port 
var serialPort = require('serialport');
var myPort = new serialPort('/dev/ttyUSB0', {
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: 'none',
  parser: serialPort.parsers.byteDelimiter(3)
});

// Port open event with callback function.
// Port open event will always be emitted. 
myPort.on('open', function() {
  console.log('Serial port open');
});

myPort.on('error', function(err) {
  console.log('Error: ', err.message);
});

myPort.on('data', function(data) {
  console.log('Data Received on serial port:');
  console.log(data);
  fileWrite.logData(csv, fs, writer, data);
//  myPort.close();
//  console.log('Port closed');
});

// -----Create Main Page Buttons-----.
// Create button to send alive command.
var aliveButton = document.createElement('button')
aliveButton.textContent = 'Send Alive Command'
aliveButton.addEventListener('click', function() {
  serialCommand.alive(myPort);
  console.log('Sending heartbeat');
})
document.body.appendChild(aliveButton)

// Create button to send data request command.
var getDataButton = document.createElement('button')
getDataButton.textContent = 'Get Data'
getDataButton.addEventListener('click', function() {
  serialCommand.getFrame(myPort);
  console.log('Requesting data frame');
})
document.body.appendChild(getDataButton)

// Create button to send motor start command
var startMotorButton = document.createElement('button')
startMotorButton.textContent = 'Start Motor'
startMotorButton.addEventListener('click', function() {
  serialCommand.startMotor(myPort);
  console.log('Starting motor');
})
document.body.appendChild(startMotorButton)

// Create button to send motor stop command
var stopMotorButton = document.createElement('button')
stopMotorButton.textContent = 'Stop Motor'
stopMotorButton.addEventListener('click', function() {
  serialCommand.stopMotor(myPort);
  console.log('Stopping motor');
})
document.body.appendChild(stopMotorButton)

// -----Create Main Page Text Input-----
// Create input to toggle valve stem, or rotary shaft

// Create input to toggle intake or exhaust measurement

// Create input to capture height (or angle) setting
var userDispBoxCaptionElement = document.createElement('CAPTION');
var userDispBoxCaptionVal = document.createTextNode('Enter Displacement');
userDispBoxCaptionElement.appendChild(userDispBoxCaptionVal);
document.body.appendChild(userDispBoxCaptionElement)
var userDisplacementBox = document.createElement('INPUT');
userDisplacementBox.setAttribute('type', 'numeric');
document.body.appendChild(userDisplacementBox)
