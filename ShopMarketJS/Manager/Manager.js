function ProductManager() {
	
	this.products = [];


	ProductManager.prototype.add =  function(product) {
		products.push(product);
	}
	
	ProductManager.prototype.edit =  function(product) {
		var indexItem = getItemIndex(product.id);
		products[indexItem] = product;
	};

	ProductManager.prototype.delete = function(productId) {
		var indexItem = getItemIndex(productId)
		products.splice(indexItem,1);
	}

	ProductManager.prototype.getId = function(productId){
		products.foreach(
			function(element){
				if (element.id == id){
					return element;
				}
			}
		);
	}
<<<<<<< HEAD
		
=======

>>>>>>> bf7ed03d7c21c67e42279254b34752ec579dc887

	ProductManager.prototype.getAll = function(){
		return products;
	}


	var getItemIndex = function(productId){
		for (var i  = 0; i < products.lenght; i++) {
			if (this.products[i].id == productId) {
				return i;
			}
		}
	};
	
}



