var poke = require('../data/friends');


module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(poke);
	});

	app.post('/api/friends', function(req, res){
		var match = {
			name: '', 
			phoot: '', 
			diff: 100 
		};

		var newUser = req.body;
		var userScores = user.scores;
		var totalDiff = 0;




	});

};