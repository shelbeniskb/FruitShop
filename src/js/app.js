var fruitApp = angular.module('fruitApp', ['ngAnimate', 'ui.router', 'akoenig.deckgrid']);
var baseUrl = "http://localhost:9001/src/";

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
/*					{id: 'p1', 'title': 'A nice day!', src: "http://lorempixel.com/300/400/technics"},
				    {id: 'p2', 'title': 'Puh!', src: "http://lorempixel.com/300/400/sports"},
				    {id: 'p3', 'title': 'What a club!', src: "http://lorempixel.com/300/400/nightlife"},
				    {id: 'p4', 'title': 'Hello World!', src: "http://lorempixel.com/300/400/fashion"},
					{id: 'p5', 'title': 'Abstract!', src: "http://lorempixel.com/300/400/abstract"},
				    {id: 'p6', 'title': 'Transport!', src: "http://lorempixel.com/300/400/transport"},
				    {id: 'p7', 'title': 'It\'s nature!', src: "http://lorempixel.com/300/400/nature"},
				    {id: 'p8', 'title': 'People People!', src: "http://lorempixel.com/300/400/people"}*/
				    {id: 'photo-1', name: 'Awesome photo', src: 'http://lorempixel.com/400/300/abstract'},
		            {id: 'photo-2', name: 'Great photo', src: 'http://lorempixel.com/450/400/city'},
		            {id: 'photo-3', name: 'Strange photo', src: 'http://lorempixel.com/400/300/people'},
		            {id: 'photo-4', name: 'A photo?', src: 'http://lorempixel.com/400/300/transport'},
		            {id: 'photo-5', name: 'What a photo', src: 'http://lorempixel.com/450/300/fashion'},
		            {id: 'photo-6', name: 'Silly photo', src: 'http://lorempixel.com/400/300/technics'},
		            {id: 'photo-7', name: 'Weird photo', src: 'http://lorempixel.com/410/350/sports'},
		            {id: 'photo-8', name: 'Modern photo', src: 'http://lorempixel.com/400/300/nightlife'},
		            {id: 'photo-9', name: 'Classical photo', src: 'http://lorempixel.com/400/300/nature'},
		            {id: 'photo-10', name: 'Dynamic photo', src: 'http://lorempixel.com/420/300/abstract'},
		            {id: 'photo-11', name: 'Neat photo', src: 'http://lorempixel.com/400/300/sports'},
		            {id: 'photo-12', name: 'Bumpy photo', src: 'http://lorempixel.com/400/300/nightlife'},
		            {id: 'photo-13', name: 'Brilliant photo', src: 'http://lorempixel.com/400/380/nature'},
		            {id: 'photo-14', name: 'Excellent photo', src: 'http://lorempixel.com/480/300/technics'},
		            {id: 'photo-15', name: 'Gorgeous photo', src: 'http://lorempixel.com/400/300/sports'},
		            {id: 'photo-16', name: 'Lovely photo', src: 'http://lorempixel.com/400/300/nightlife'},
		            {id: 'photo-17', name: 'A "wow" photo', src: 'http://lorempixel.com/400/300/nature'},
		            {id: 'photo-18', name: 'Bodacious photo', src: 'http://lorempixel.com/400/300/abstract'}
				];
			}
		})
	  .state('home.meat', {
			url: '/home-meat',
			templateUrl: baseUrl + 'tpls/home-meat.html'
		})
	  .state('home.milk', {
			url: '/home-milk',
			templateUrl: baseUrl + 'tpls/home-milk.html'
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