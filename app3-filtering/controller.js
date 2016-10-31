angular.module('app3').controller('mainCtrl', function($scope, mainSrv) {
	$scope.test = "works";

	$scope.people = mainSrv.data;
});
