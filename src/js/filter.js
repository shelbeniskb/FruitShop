fruitApp.controller('FilterCtrl', ['$scope', function ($scope) {
	$scope.isFilterPanelShow = false;
	$scope.currentSelItem = 0;
	$scope.items = [
		{sref: 'home.fruit', norclass: 'font-icon fa fa-apple'},
		{sref: 'home.meat', norclass: 'font-icon fa fa-birthday-cake'},
		{sref: 'home.milk', norclass: 'font-icon fa fa-coffee'}
	];
	$scope.isCurrentItemSelect = function(index) {
		return index === $scope.currentSelItem;
	}
	$scope.selectItem = function(index) {
		$scope.currentSelItem = index;
		if($scope.isFilterPanelShow) {
			$scope.isFilterPanelShow = false;
		}
	}
	$scope.showFilterPanel = function() {
		$scope.isFilterPanelShow = !$scope.isFilterPanelShow;
		if ($scope.isFilterPanelShow) {
			var items = $('.circle a'),
				numOfPos = 8, //by defualt, we have 8 position to place item
				pos = [0,1,2]; //choose any pos you like to put the item
  
			for(var i = 0, l = items.length; i < l; i++) {
			  items[i].style.left = (50 - 40*Math.cos(-0.5 * Math.PI - 2*(1/numOfPos)*pos[i]*Math.PI)).toFixed(4) + "%";
			  items[i].style.top = (50 + 40*Math.sin(-0.5 * Math.PI - 2*(1/numOfPos)*pos[i]*Math.PI)).toFixed(4) + "%";
			}
		}
	}
}])