var polls = require('./../controllers/polls.js');

module.exports = function(app){
	app.post('/polls', function(req, res){
		console.log("got to the /polls post route");
		polls.createPoll(req, res);
		// mongooseController.getMongooses(req, res);
	})
	app.get('/polls', function(req, res){
		console.log("got to the /polls get route");
		polls.createPoll(req, res);
		// mongooseController.getMongooses(req, res);
	})
}
