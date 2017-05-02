var poke = require('../data/friends');


module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(poke);
	});




	app.post('/api/friends', function(req, res, next){

		var pokematch = {
			name: '', 
			photo: '', 
			diff: 100 
		};

		var newUser = req.body;
		console.log(newUser);
		var userScores = newUser.scores;
		var totalDiff = 0;

		for(var i=0; i < poke.length; i++){
			console.log(poke[i].name);
			totalDiff = 0;

			for (var j=0; j<poke[i].scores[j]; j++){
				totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(poke[i].scores[j]));

				if(totalDiff <= pokematch.diff){
					pokematch.name = poke[i].name;
					pokematch.photo = poke[i].photo;
					pokematch.diff = totalDiff;
				}
			}
		}


		poke.push(newUser);
		console.log(pokematch);
		res.json(pokematch);


	});



	

};