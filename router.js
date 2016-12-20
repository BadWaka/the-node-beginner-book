/**
 * Created by BadWaka on 2016/12/19.
 */
function route(handle, pathname, response, request) {
    console.log('【router.js】pathname = ' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, request);
    } else {
        console.log('【router.js】No request handle found ' + pathname);
        response.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        response.write('404 Not found');
        response.end();
    }
}

module.exports = {
    route: route
};