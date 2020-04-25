var ApiBuilder = require('claudia-api-builder'),
	api = new ApiBuilder();

module.exports = api;

api.get('/hello/{name}', function (request) {
    const { name } = request.pathParams;
	return "Hello " + name;
});