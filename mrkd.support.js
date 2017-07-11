"use strict"; /*;
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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"mtch": "mtch",
              			"protype": "protype",
              			"raze": "raze",
              			"xcavate": "xcavate",
              			"zelf": "zelf"
              		}
              	@end-include
              */

var depher = require("depher");
var falzy = require("falzy");
var kein = require("kein");
var protype = require("protype");
var raze = require("raze");
var xcavate = require("xcavate");
var zelf = require("zelf");

var SYMBOL_PATTERN = /^Symbol\((.+?)\)$/;

var mrkd = function mrkd(marker, entity, strict) {
	/*;
                                                  	@meta-configuration:
                                                  		{
                                                  			"marker:required": [
                                                  				"number",
                                                  				"string",
                                                  				"symbol"
                                                  			],
                                                  			"entity:required": "*",
                                                  			"strict": "boolean"
                                                  		}
                                                  	@end-meta-configuration
                                                  */

	if (falzy(marker) || !protype(marker, NUMBER + SYMBOL + STRING)) {
		throw new Error("invalid marker");
	}

	marker = xcavate(marker, entity);

	var parameter = raze(arguments);
	entity = depher(parameter, [FUNCTION, OBJECT], zelf(this));

	strict = depher(parameter, BOOLEAN, false);

	if (strict) {
		return kein(marker, entity) && entity[marker] === marker;
	}

	return kein(marker, entity);
};

module.exports = mrkd;

//# sourceMappingURL=mrkd.support.js.map