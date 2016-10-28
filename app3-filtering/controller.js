angular.module('myApp').controller('mainCtrl', function($scope, mainSrv) {

	$scope.employees = mainSrv.data;
});
