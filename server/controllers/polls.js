var mongoose = require('mongoose');
var surveyDB = mongoose.model('surveyDB');

module.exports = (function() {
	return {
		createPoll: function(req, res){
			poll = new surveyDB(req.body);
			poll.save(function(err,result){
				if(err){
					console.log("error creating new poll", err);
				} else{
					console.log("here's a new poll", result);
					res.json(result);
				}
			})
		},

		getPolls: function(req, res){
			surveyDB.find({}, function(err,result){
				if(err){
					console.log("error creating new poll", err);
				} else{
					console.log("here's your polls", result);
					res.json(result);
				}
			})
		}
	}
})();
