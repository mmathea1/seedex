'use strict';

function useAngular (req, res, next) {
	res.sendFile(require('path').join(__dirname, './public/index.html'));
};

exports = module.exports = function (app) {

	// get/post routes here

	app.all(/^(?!\/api).*$/, useAngular);
};