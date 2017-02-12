// Define serial port
var SerialPort = require("serialport");
var port = new SerialPort("/dev/ttyUSB0", {
  baudRate: 9600,
  parser: SerialPort.parsers.raw
});

// Get command from main script
var command = function(character){
  return character;
};

//var response = 'Q';


// Output the received data
module.exports.command = command;
//module.exports.response = response;
