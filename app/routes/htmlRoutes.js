var path = require('path');

module.exports = function(app) {
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	app.get('/survey2', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey2.html'));
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
};
