myApp.controller('createController', function($scope, $location, pollFactory){

	console.log('I am able to load my CREATEController along with my new partial');


	$scope.newPoll = function(){
		console.log("This is my newpoll", $scope.new);
		pollFactory.addPoll($scope.new, function(polls){
			$scope.polls = polls;
			$scope.new = {};
		})
	}
})
