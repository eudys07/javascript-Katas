'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getProdutMananger = getProdutMananger;

var _product = require('./product.js');

var product = _interopRequireWildcard(_product);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductManager = function () {
	//import {getMethods as product} from '../entity/product.js';

	function ProductManager() {
		_classCallCheck(this, ProductManager);

		//this.product = new Product(); 
		//this.products = [];
		this.name = 'Eudys';

		console.log("Ready.... Constructor");
	}

	_createClass(ProductManager, [{
		key: 'getAllProduct',
		value: function getAllProduct() {
			product.getProduct().init();
			product.getProduct().setName("Phone");
			product.getProduct().setPrice(300);
			product.getProduct().add(product);

			console.log("getAll Products");
			console.log(product.getProduct().getAll());
			return product.getProduct().getAll();
		}
	}]);

	return ProductManager;
}();

var mng = new ProductManager();
function getProdutMananger() {

	return {
		getAll: mng.getAllProduct
	};
}