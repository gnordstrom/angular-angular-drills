angular.module('arrayApp').controller('arrayController', function($scope, arrayService) {
	$scope.test = "works";

	$scope.people = arrayService.data;
})
