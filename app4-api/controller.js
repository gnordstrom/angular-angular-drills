angular.module('apiApp').controller('mainCtrl', function($scope, mainSrv) {

	$scope.getSpecies = function() {
		var promise = mainSrv.getSpecies();
		promise.then(function(response) {
			$scope.species = response;
		});
	};
	$scope.getSpecies();
});
