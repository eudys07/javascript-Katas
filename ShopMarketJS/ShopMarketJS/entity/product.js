class Product{

	construtor(){
		this.name;
		this.price;
		this.product = new Product(); 
		this.products = [];
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

export default Product;