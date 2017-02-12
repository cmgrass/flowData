// Require serialCommand method
var testModule = require('./js/testModule');
var serialCommand = require('./js/serialCommand');

var serialButton = document.querySelector('.serial-button');

serialButton.addEventListener('click', function () {
    // Issue serial command
    console.log(serialCommand.command('A'));
//    console.log(serialCommand.response());
  });
