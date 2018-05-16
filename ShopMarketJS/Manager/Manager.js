function ProductManager() {
	
	var products = [];
	this.product = new Product();
	
	this.add =  function(product) {
		products.push(product);
	}

	this.edit =  function(product) {
		var indexItem = getItemIndex(product);
		products[indexItem] = product;
	};

	this.getId = function(id){
		products.foreach(
			function(element){
				if (element.id == id){
					return element;
				}
			}
		);
	}

	var getItemIndex = function(product){
		for (var i  = 0; i < products.lenght; i++) {
			if (products[i].id == product.id) {
				return i;
			}
		}
	};



	//this.delete = 
}