class Product{

	construtor(){
		this.name;
		this.price;
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

	export getMethods(){
		return {
			getName: getName(),
			setName: setName(),
			getPrice: getPrice(),
			setPrice:setPrice()
		};
	}
}

// export default Product;