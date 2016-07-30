'use strict';

(function() {

	var app = angular.module('seedex', [
		'ngRoute'
	]);

	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode({ enabled: true, requireBase: true });
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html'
			})
			.otherwise({
				templateUrl: 'views/404.html'
			});
	}]);

})();