"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getProduct = getProduct;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function () {
	function Product() {
		_classCallCheck(this, Product);
	}

	_createClass(Product, [{
		key: "construtor",
		value: function construtor() {
			this.name;
			this.price;
			this.product = new Product();
			this.products = [];

			console.log("-------Start--constructor------");
			console.log(this.products);
			console.log("typeof: " + _typeof(this.products));
			//console.log("constructor: " + this.products.constructor);
			console.log("--------End---constructor------");
		}
	}, {
		key: "getName",
		value: function getName() {
			return this.name;
		}
	}, {
		key: "setName",
		value: function setName(name) {
			this.name = name;
		}
	}, {
		key: "getPrice",
		value: function getPrice() {
			return this.price;
		}
	}, {
		key: "setPrice",
		value: function setPrice(price) {
			this.price = price;
		}
	}, {
		key: "getAll",
		value: function getAll() {
			return products;
		}
	}, {
		key: "get",
		value: function get(product) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					product = _step.value;

					if (product === this.product) {
						return product;
					}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}, {
		key: "add",
		value: function add(product) {
			console.log(_typeof(this.products));
			//console.log(this.products.constructor);
			this.products.push(product);
		}
	}, {
		key: "edit",
		value: function edit(product) {
			for (var p = 0; p <= products.lenght; p++) {
				if (product.name === products[p].name) {
					products[p].price = product.price;
				}
			}
		}
	}, {
		key: "delete",
		value: function _delete(product) {
			for (var p = 0; p <= products.lenght; p++) {
				if (product.name === products[p].name) {
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

	}]);

	return Product;
}();

function getProduct() {

	var product = null;

	function init() {

		if (product == 'undefined' || product === null) {
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