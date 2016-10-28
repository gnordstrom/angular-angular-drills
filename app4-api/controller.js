angular.module('apiApp').controller('mainCtrl', function($scope, mainSrv) {
	$scope.getStarship = function() {
		var promise = mainSrv.getStarships();
		promise.then(function(response) {
			$scope.starships = response;
		});
	};
	$scope.getStarship();
});
