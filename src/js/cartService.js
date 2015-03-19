fruitApp.service('cartService', [function () {
	this.putOneItem = function(item) {
		this.items = this.items || [];
		this.items.push(item);
	}

	this.removeOneItem = function(id) {
		var items = this.items || [],
			len = items.length;
		if (len === 0) {
			return;
		}
		for (var i = 0; i < len; i++) {
			if (items[i].id === id) {
				items.splice(i , 1);
			}
		}
	}

	this.getAllItems = function() {
		return this.items;
	}
}])