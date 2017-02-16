// Write data to file
exports.logData = function(csv, fs, writer, data) {
  // Write data to file
  writer.writeRecord(data);
  console.log('Data written to file');
}
