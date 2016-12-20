/**
 * Created by BadWaka on 2016/12/19.
 */
var http = require('http');
var url = require('url');

function start(route, handle) {
    http.createServer(function (request, response) {
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response, request);
    }).listen(3001);
    console.log('server 3001 has started...');
}

module.exports = {
    start: start
};