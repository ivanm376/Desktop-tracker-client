var exec = require('child_process').exec;
var request = require('request');
var fs = require('fs');

(function timer() {
    // TODO add Mac/Windows command
    exec('import -window root -quality 50 screenshot.jpg', function () {
        fs.createReadStream('screenshot.jpg').pipe(request.post(process.argv[2] + '/screenshot'));
    });
    exec('import -window root -resize 200 thumbnail.jpg', function () {
        fs.createReadStream('thumbnail.jpg').pipe(request.post(process.argv[2] + '/thumbnail'));
    });
    setTimeout(timer, 10 * 60 * 1000); // once 10 minutes
}());

process.on('uncaughtException', function (err) {
//     console.log('uncaughtException');
});
