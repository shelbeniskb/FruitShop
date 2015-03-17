var fruitApp = angular.module('fruitApp', ['ngAnimate', 'ui.router', 'akoenig.deckgrid']);
var baseUrl = "http://localhost:9001/src/";

fruitApp.controller('RootCtrl', ['$scope', function ($scope) {
	$scope.showMyName = function() {
		console.log('i am root controller');
	}
}]);


fruitApp.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: baseUrl + '/tpls/home.html',
		controller: function($scope) {
			$scope.onViewLoad = function() {
				console.log('fruit view back!')
			}
		}
	}).state('home.fruit', {
			url: '/home-fruit',
			templateUrl: baseUrl + '/tpls/home-fruit.html',
			resolve: {
				fetchData: function($http) {
					return $http({
						method: 'GET',
						url: 'http://localhost:9001/src/data/fruit.json'
					})
				}
			},
			controller: 'FruitCtrl'
		})
	  .state('home.meat', {
			url: '/home-meat',
			templateUrl: baseUrl + 'tpls/home-meat.html',
			resolve: {
				fetchData: function($http) {
					return $http({
						method: 'GET',
						url: 'http://localhost:9001/src/data/meat.json'
					})
				}
			},
			controller: 'MeatCtrl'
		})
	  .state('home.milk', {
			url: '/home-milk',
			templateUrl: baseUrl + 'tpls/home-milk.html',
			resolve: {
				fetchData: function($http) {
					return $http({
						method: 'GET',
						url: 'http://localhost:9001/src/data/milk.json'
					})
				}
			},
			controller: 'MilkCtrl'
		})
	.state('login', {
		url: '/login',
		templateUrl: baseUrl + 'tpls/login.html'
	})
	.state('detail', {
		url: '/detail',
		templateUrl: baseUrl + 'tpls/detail.html'
	})

});

fruitApp.controller('FruitCtrl', function ($scope, fetchData) {
	console.log(fetchData)
	$scope.photos = fetchData.data;	
})

fruitApp.controller('MeatCtrl', function ($scope, fetchData) {
	console.log(fetchData)
	$scope.photos = fetchData.data;	
})

fruitApp.controller('MilkCtrl', function ($scope, fetchData) {
	console.log(fetchData)
	$scope.photos = fetchData.data;	
})