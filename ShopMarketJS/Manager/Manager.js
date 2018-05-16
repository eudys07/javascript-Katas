function ProductManager() {
	
	var products = [];
	
	this.add =  function(product) {
		products.push(product);
	}

	this.edit =  function(product) {
		var indexItem = getItemIndex(product.id);
		products[indexItem] = product;
	};

	this.delete = function(productId) {
		var indexItem = getItemIndex(productId)
		products.splice(indexItem,1);
	}


	this.getId = function(id){
		products.foreach(
			function(element){
				if (element.id == id){
					return element;
				}
			}
		);
	}

	this.getAll = function(){
		return products;
	}

	var getItemIndex = function(productId){
		for (var i  = 0; i < products.lenght; i++) {
			if (products[i].id == productId) {
				return i;
			}
		}
	};
	
}