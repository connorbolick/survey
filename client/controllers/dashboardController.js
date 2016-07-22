myApp.controller('dashboardController', function($scope, pollFactory){
	// Here is where we are creating indexController.
	// You have to make sure that our index controller matches the name
	// that we pass in, in our router.
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	console.log('I am able to load my dahboardController along with my index partial');
	pollFactory.getPolls(function(data){
		console.log('this is data in dashboardController', data);
		$scope.polls = data;
	})
	// dummyFactory.addDummy({name: 'req.body.test', status: 'working'}, function(data){
	// 	console.log(data);
	// })
})
