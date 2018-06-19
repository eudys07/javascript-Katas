'use strict';

var _productManager = require('./product-manager.js');

var producMng = _interopRequireWildcard(_productManager);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log('Working Hard with ES6');
producMng.getProdutMananger().init();
console.log(producMng.getProdutMananger().getAll());

/*let prodHandle = ProductManager;
console.log('Working Hard with ES6');
console.log(prodHandle);
console.log(ProductManager);*/
//console.log(getAllProduct());
//console.log(prodHandle.get());