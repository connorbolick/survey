myApp.factory('pollFactory', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well
	// as how we would create a get request.


	var polls = [];

	var factory = {};

	factory.getPolls = function(callback){
		$http.get('/polls').then(function(data){
			polls = data.data;
			callback(data.data);
		});
	}

	factory.getOnePoll = function(pollId, callback){
		$http.get('/onePoll/'+pollId).then(function(data){
			poll = data;
			callback(data);
		});
	}



	factory.deletePoll = function(poll, callback){
		console.log("got to deletepoll on pollFactory", poll);
		$http.get('/deletePoll/'+ poll).then(function(data){
			console.log("updated polls");
			callback(data.data);
		});
	}

	// the info parameter below is the the dummy that we're trying to add into our database

	// I added a test for myself below. I'm passing both a body element as well a params element
	// I use this as an initial test that I can pass information to my backend.
	// Check out your server console and you should see the body and the value we pass through
	// the url.
	factory.addPoll = function(info, callback){
		console.log("got to addpoll Factory", info);
		$http.post('/polls', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				console.log("here's data on the friend factory", data);
				polls.push(data.data);
				callback(polls);
			}
		})
	}

	return factory;
})
