//import Product from '../entity/product.js'

class ProductManager{
	
	constructor(){
		this.product = new Product(); 
		this.products = [];
	}

	getAll = () => this.products;

	get = (p) => {
		for(product of products){
			if (p === product){
				return product;
			}
		}
	};	

	add = p => products.push(p); 

	edit = p => {
		for(let p = 0; p <= products.lenght; p++){
			if (p.name === products[p].name){
				products[p].price = p.price;
			}
		}		
	};

	delete= p => {
		for(let p = 0; p <= products.lenght; p++){
			if (p.name === products[p].name){
				delete products[p];
			}
		}		
	};
}

//console.log(new Product());