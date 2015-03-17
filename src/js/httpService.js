fruitApp.service('httpService', [function ($http, url, callback) {
	this.get = function(url, callback) {
		$http.get(url).success(callback(data)).error(callback(data));
	}

	this.post = function(url, callback) {
		$http.post(url).success(callback(data)).error(callback(data));
	}
}])