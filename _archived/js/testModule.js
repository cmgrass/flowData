// Define serial port
//var SerialPort = require("serialport");
//var port = new SerialPort("/dev/ttyUSB0", {
//  baudRate: 9600,
//  parser: SerialPort.parsers.raw
//});

// Export method for other modules or files to use
//module.exports = {
//  cmdChar: function(character){
//    console.log(character);
//};

var x = 5;
var addX = function(value) {
  return value + x;
};

module.exports.addX = addX;
