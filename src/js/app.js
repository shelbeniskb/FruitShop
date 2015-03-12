var fruitApp = angular.module('fruitApp', ['ui.router', 'akoenig.deckgrid']);
var baseUrl = "http://localhost:9001/src";

fruitApp.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");

	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: baseUrl + '/tpls/home.html'
	}).state('home.fruit', {
			url: '/home-fruit',
			templateUrl: baseUrl + '/tpls/home-fruit.html',
			controller: function ($scope) {
				$scope.photos = [
					{id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/300/400/technics"},
				    {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/400/sports"},
				    {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/300/400/nightlife"},
				    {id: 'p4', 'title': 'Hello World!', src: "http://lorempixel.com/300/400/fashion"},
					{id: 'p5', 'title': 'Abstract!', src: "http://lorempixel.com/300/400/abstract"},
				    {id: 'p6', 'title': 'Transport!', src: "http://lorempixel.com/300/400/transport"},
				    {id: 'p7', 'title': 'It\'s nature!', src: "http://lorempixel.com/300/400/nature"},
				    {id: 'p8', 'title': 'People People!', src: "http://lorempixel.com/300/400/people"}
				];
				$scope.doSomething = function() {
					console.log("kh");
				}
			}
		})
	  .state('home.meat', {
			url: '/home-meat',
			templateUrl: baseUrl + '/tpls/home-meat.html'
		})
	  .state('home.milk', {
			url: '/home-milk',
			templateUrl: baseUrl + '/tpls/home-milk.html'
		})
	.state('login', {
		url: '/login',
		templateUrl: baseUrl + '/tpls/login.html'
	})
	.state('detail', {
		url: '/detail',
		templateUrl: baseUrl + '/tpls/detail.html'
	})

});