import Product from 'product.js'

class ProductManager{
	//import {getMethods as product} from '../entity/product.js';
	
	constructor(){
		//this.product = new Product(); 
		//this.products = [];
	}
	
	get(){
		product = new Product();
		product.setName("Phone");
		product.setPrice(300);
		product.add(product);

		console.log(product.getAll());
	}

}

//console.log(new Product());