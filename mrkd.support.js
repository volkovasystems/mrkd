"use strict";var _getOwnPropertySymbols = require("babel-runtime/core-js/object/get-own-property-symbols");var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);var _for = require("babel-runtime/core-js/symbol/for");var _for2 = _interopRequireDefault(_for);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*;
                                                                                                                                                                                                                                                                                                                                                                                      	@module-license:
                                                                                                                                                                                                                                                                                                                                                                                      		The MIT License (MIT)
                                                                                                                                                                                                                                                                                                                                                                                      		@mit-license
                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                      		Copyright (@c) 2017 Richeve Siodina Bebedor
                                                                                                                                                                                                                                                                                                                                                                                      		@email: richeve.bebedor@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                      		Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                      		of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                      		in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                      		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                      		copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                      		furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                      		The above copyright notice and this permission notice shall be included in all
                                                                                                                                                                                                                                                                                                                                                                                      		copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                      		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                      		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                      		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                      		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                      		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                      		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                                                                                                                                                                                                                                                                                                                                                                      		SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                      	@end-module-license
                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                      	@module-configuration:
                                                                                                                                                                                                                                                                                                                                                                                      		{
                                                                                                                                                                                                                                                                                                                                                                                      			"package": "mrkd",
                                                                                                                                                                                                                                                                                                                                                                                      			"path": "mrkd/mrkd.js",
                                                                                                                                                                                                                                                                                                                                                                                      			"file": "mrkd.js",
                                                                                                                                                                                                                                                                                                                                                                                      			"module": "mrkd",
                                                                                                                                                                                                                                                                                                                                                                                      			"author": "Richeve S. Bebedor",
                                                                                                                                                                                                                                                                                                                                                                                      			"eMail": "richeve.bebedor@gmail.com",
                                                                                                                                                                                                                                                                                                                                                                                      			"repository": "https://github.com/volkovasystems/mrkd.git",
                                                                                                                                                                                                                                                                                                                                                                                      			"test": "mrkd-test.js",
                                                                                                                                                                                                                                                                                                                                                                                      			"global": true
                                                                                                                                                                                                                                                                                                                                                                                      		}
                                                                                                                                                                                                                                                                                                                                                                                      	@end-module-configuration
                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                      	@module-documentation:
                                                                                                                                                                                                                                                                                                                                                                                      		Checks if entity is marked by unique symbol.
                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                      		Strict mode check if the marker is a burned mark.
                                                                                                                                                                                                                                                                                                                                                                                      	@end-module-documentation
                                                                                                                                                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                                      	@include:
                                                                                                                                                                                                                                                                                                                                                                                      		{
                                                                                                                                                                                                                                                                                                                                                                                      			"depher": "depher",
                                                                                                                                                                                                                                                                                                                                                                                      			"falzy": "falzy",
                                                                                                                                                                                                                                                                                                                                                                                      			"kein": "kein",
                                                                                                                                                                                                                                                                                                                                                                                      			"protype": "protype",
                                                                                                                                                                                                                                                                                                                                                                                      			"raze": "raze",
                                                                                                                                                                                                                                                                                                                                                                                      			"zelf": "zelf"
                                                                                                                                                                                                                                                                                                                                                                                      		}
                                                                                                                                                                                                                                                                                                                                                                                      	@end-include
                                                                                                                                                                                                                                                                                                                                                                                      */

var depher = require("depher");
var falzy = require("falzy");
var kein = require("kein");
var protype = require("protype");
var raze = require("raze");
var zelf = require("zelf");

var SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

var mrkd = function mrkd(marker, entity, strict) {
	/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"marker:required": [
                                                  				"string",
                                                  				"symbol"
                                                  			],
                                                  			"entity:required": "*",
                                                  			"strict": "boolean"
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	if (falzy(marker) || !protype(marker, SYMBOL + STRING)) {
		throw new Error("invalid marker");
	}

	var mark = marker;
	if (protype(marker, SYMBOL)) {
		//: @note: Just use toString here.
		mark = marker.toString().match(SYMBOL_PATTERN)[1];
	}

	/*;
   	@note:
   		If given marker is a string this will use the global context of symbol.
   	@end-note
   */
	if (protype(marker, STRING)) {
		marker = (0, _for2.default)(marker);
	}

	var parameter = raze(arguments);
	entity = depher(parameter, [FUNCTION, OBJECT], zelf(this));

	strict = depher(parameter, BOOLEAN, false);

	if (strict) {
		return kein(marker, entity) && entity[marker] === marker;
	}

	//: @note: Just use toString here.
	return kein(marker, entity) || (0, _getOwnPropertySymbols2.default)(entity).
	map(function (symbol) {return symbol.toString().match(SYMBOL_PATTERN)[1];}).
	some(function (symbol) {return symbol == mark;});
};

module.exports = mrkd;

//# sourceMappingURL=mrkd.support.js.map