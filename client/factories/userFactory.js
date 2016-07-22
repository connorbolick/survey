myApp.factory('userFactory', function($http){

	// This is my dummyFactory. I usually add this into any project that
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well
	// as how we would create a get request.


	var users = [];

	var factory = {};

	factory.getUsers = function(callback){
		$http.get('/users').then(function(data){
			users = data.data;
			callback(data.data);
		});
	}

	// factory.getOneUser = function(UserId, callback){
	// 	$http.get('/oneUser/'+userId).then(function(data){
	// 		user = data;
	// 		callback(data);
	// 	});
	// }



	factory.addUser = function(info, callback){
		console.log("got to adduser Factory", info);
		$http.post('/users', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				console.log("here's data on the user factory", data);
				users.push(data);
				callback(users);
			}
		})
	}

	return factory;
})
