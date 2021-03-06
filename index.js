/**
 * Created by BadWaka on 2016/12/19.
 */
var server = require('./server');
var router = require('./router');
var requestHandles = require('./requestHandles');

var handle = {};
handle['/'] = requestHandles.start;
handle['/start'] = requestHandles.start;
handle['/upload'] = requestHandles.upload;
handle['/show'] = requestHandles.show;

server.start(router.route, handle);