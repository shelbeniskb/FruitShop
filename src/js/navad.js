/*this file is the controller for ad navigation*/

var baseUrl = "http://localhost:9001/src/";
fruitApp.controller('NavADCtrl', ['$scope', function ($scope) {
	$scope.slides = [
		{image: baseUrl + 'image/ad00.jpg', description: 'ad00'},
		{image: baseUrl + 'image/ad01.jpg', description: 'ad01'},
		{image: baseUrl + 'image/ad02.jpg', description: 'ad02'},
		{image: baseUrl + 'image/ad03.jpg', description: 'ad03'},
		{image: baseUrl + 'image/ad04.jpg', description: 'ad04'},
	];

	$scope.currentIndex = 0;

	$scope.setCurrentSlideIndex = function(index) {
		$scope.currentIndex = index;
	}

	$scope.isCurrentSlideIndex = function(index) {
		return $scope.currentIndex === index;
	}

	$scope.nextSlide = function () {
        $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };

    $scope.prevSlide = function () {
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };
}]).animation('.slide-animation', function() {
	return {
		addClass: function(element, className, done) {
			if (className == 'ng-hide') {
				TweenMax.to(element, 0.5, {left: -element.parent().outerWidth(), onComplete: done });
			} else {
				done();
			}
		},
		removeClass: function(element, className, done) {
			if (className == 'ng-hide') {
				element.removeClass('ng-hide');

                TweenMax.set(element, { left: element.parent().outerWidth() });
                TweenMax.to(element, 0.5, {left: 0, onComplete: done });

			} else {
				done();
			}
		}
	}
})
