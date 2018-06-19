class Product{

	construtor(){
		this.name;
		this.price;
		this.product = new Product(); 
		this.products = [];

		console.log("-------Start--constructor------");
		console.log(this.products);
		console.log("typeof: " + typeof(this.products));
		//console.log("constructor: " + this.products.constructor);
		console.log("--------End---constructor------");
	}

	getName(){
		return this.name;
	}

	setName(name){
		this.name = name;
	}

	getPrice(){
		return this.price;
	}

	setPrice(price){
		this.price = price;
	}

	getAll(){
		return products;
	}
		
	get(product){
		for(product of this.products){
			if (product === this.product){
				return product;
			}	
		}	
	}

	add(product){
		console.log(typeof(this.products));
		//console.log(this.products.constructor);
		this.products.push(product);
	}

	edit(product){
		for(let p = 0; p <= products.lenght; p++){
			if (product.name === products[p].name){
				products[p].price = product.price;
			}
		}
	}
	
	delete(product){
		for(let p = 0; p <= products.lenght; p++){
			if (product.name === products[p].name){
				delete products[p];
			}
		}
	}

	/*export getMethods(){
		return {
			getName: getName(),
			setName: setName(),
			getPrice: getPrice(),
			setPrice:setPrice()
		};
	}*/
}


export function getProduct(){
	
	let product = null;

	function init(){

		if (product == 'undefined' || product === null){
			product = new Product();
			console.log("Ready.........");
		}

	}

	return {
		init: init,
		getName: product.getName,
		setName: product.setName,
		getPrice: product.getPrice,
		setPrice: product.setPrice,
		getAll: product.getAll,
		get: product.get,
		add: product.add,
		edit: product.edit,
		delete: product.delete
	};
}
