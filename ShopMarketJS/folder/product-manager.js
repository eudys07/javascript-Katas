import * as product from './product.js'

class ProductManager{
	//import {getMethods as product} from '../entity/product.js';
	
	constructor(){
		//this.product = new Product(); 
		//this.products = [];
		this.name = 'Eudys'

		console.log("Ready.... Constructor");
	}
	
	getAllProduct(){
		product.getProduct().init();
		product.getProduct().setName("Phone");
		product.getProduct().setPrice(300);
		product.getProduct().add(product);

		console.log("getAll Products");
		console.log(product.getProduct().getAll());
		return product.getProduct().getAll();
	}

}


let mng = new ProductManager();	
export function getProdutMananger(){
	
	return {
		getAll: mng.getAllProduct
	};
} 

