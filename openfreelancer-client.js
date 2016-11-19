var exec = require('child_process').exec;
var request = require('request');
var fs = require('fs');

(function timer() {
  // TODO add Mac/Windows command
  exec('import -quality 50 -window root screenshot.jpg', function () {
    fs.createReadStream('screenshot.jpg').pipe(request.post(process.env.URL));
  });
  setTimeout(timer, 10 * 60 * 1000); // once 10 minutes
}());
