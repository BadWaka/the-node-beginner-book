/**
 * Created by BadWaka on 2016/12/19.
 */
var fs = require('fs'),
    querystring = require('querystring'),
    formidable = require('formidable');

function start(response, request) {
    console.log('【requestHandles.js】start');

    fs.readFile('./frontend/index.html', function (error, data) {
        if (error) {
            console.error(error);
        }
        var html = data.toString();
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write(html);
        response.end();
    });
}

function upload(response, request) {
    console.log('【requestHandles.js】upload');

    var form = new formidable.IncomingForm();
    console.log('about to parse');
    form.parse(request, function (error, fields, files) {
        console.log('parsing done');
        fs.renameSync(files.upload.path, '/tmp/test.png');
        response.writeHead(200, {'Content-Type': 'text/html'});
        // response.write('received image:<br/>');
        response.write('<img src="/show"/>');
        response.end();
    });
}

function show(response, request) {
    console.log('【requestHandles.js】show');

    fs.readFile('/tmp/test.png', 'binary', function (error, file) {
        if (error) {
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.write(error + '\n');
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.write(file, 'binary');
            response.end();
        }
    });
}

module.exports = {
    start: start,
    upload: upload,
    show: show
};