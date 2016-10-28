angular.module('apiApp').service('mainSrv', function($http) {
	var baseUrl = 'http://swapi.co/api/starships/';

	this.getStarships = function() {
		var promise = $http.get(baseUrl).then(function(response) {
			if (response.status === 200) {
				return response.data;
			} else {
				return "Error retrieving data";
			}
		});
		return promise;
	};
});
