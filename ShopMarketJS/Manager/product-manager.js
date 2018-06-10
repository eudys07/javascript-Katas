//import Product from '../entity/product.js'

class ProductManager{
	
	constructor(){
		this.product = new Product(); 
		this.products = [];
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

}

//console.log(new Product());