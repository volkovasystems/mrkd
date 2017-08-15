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
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ya2Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkZXBoZXIiLCJyZXF1aXJlIiwiZmFsenkiLCJrZWluIiwicHJvdHlwZSIsInJhemUiLCJ4Y2F2YXRlIiwiemVsZiIsIlNZTUJPTF9QQVRURVJOIiwibXJrZCIsIm1hcmtlciIsImVudGl0eSIsInN0cmljdCIsIk5VTUJFUiIsIlNZTUJPTCIsIlNUUklORyIsIkVycm9yIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJCT09MRUFOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxPQUFRRixRQUFTLE1BQVQsQ0FBZDtBQUNBLElBQU1HLFVBQVVILFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTU8saUJBQWlCLG1CQUF2Qjs7QUFFQSxJQUFNQyxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsTUFBZixFQUF1QkMsTUFBdkIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQ25EOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQUlWLE1BQU9RLE1BQVAsS0FBbUIsQ0FBQ04sUUFBU00sTUFBVCxFQUFpQkcsU0FBU0MsTUFBVCxHQUFrQkMsTUFBbkMsQ0FBeEIsRUFBcUU7QUFDcEUsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVETixVQUFTSixRQUFTSSxNQUFULEVBQWlCQyxNQUFqQixDQUFUOztBQUVBLEtBQUlNLFlBQVlaLEtBQU1hLFNBQU4sQ0FBaEI7QUFDQVAsVUFBU1gsT0FBUWlCLFNBQVIsRUFBbUIsQ0FBRUUsUUFBRixFQUFZQyxNQUFaLENBQW5CLEVBQXlDYixLQUFNLElBQU4sQ0FBekMsQ0FBVDs7QUFFQUssVUFBU1osT0FBUWlCLFNBQVIsRUFBbUJJLE9BQW5CLEVBQTRCLEtBQTVCLENBQVQ7O0FBRUEsS0FBSVQsTUFBSixFQUFZO0FBQ1gsU0FBT1QsS0FBTU8sTUFBTixFQUFjQyxNQUFkLEtBQTRCQSxPQUFRRCxNQUFSLE1BQXFCQSxNQUF4RDtBQUNBOztBQUVELFFBQU9QLEtBQU1PLE1BQU4sRUFBY0MsTUFBZCxDQUFQO0FBQ0EsQ0EvQkQ7O0FBaUNBVyxPQUFPQyxPQUFQLEdBQWlCZCxJQUFqQiIsImZpbGUiOiJtcmtkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcIm1ya2RcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwibXJrZC9tcmtkLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcIm1ya2QuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJtcmtkXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL21ya2QuZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcIm1ya2QtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRDaGVja3MgaWYgZW50aXR5IGlzIG1hcmtlZCBieSB1bmlxdWUgc3ltYm9sLlxyXG5cclxuXHRcdFN0cmljdCBtb2RlIGNoZWNrIGlmIHRoZSBtYXJrZXIgaXMgYSBidXJuZWQgbWFyay5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImRlcGhlclwiOiBcImRlcGhlclwiLFxyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxyXG5cdFx0XHRcIm10Y2hcIjogXCJtdGNoXCIsXHJcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcclxuXHRcdFx0XCJyYXplXCI6IFwicmF6ZVwiLFxyXG5cdFx0XHRcInhjYXZhdGVcIjogXCJ4Y2F2YXRlXCIsXHJcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZGVwaGVyID0gcmVxdWlyZSggXCJkZXBoZXJcIiApO1xyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBrZWluID0gIHJlcXVpcmUoIFwia2VpblwiICk7XHJcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xyXG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcclxuY29uc3QgeGNhdmF0ZSA9IHJlcXVpcmUoIFwieGNhdmF0ZVwiICk7XHJcbmNvbnN0IHplbGYgPSByZXF1aXJlKCBcInplbGZcIiApO1xyXG5cclxuY29uc3QgU1lNQk9MX1BBVFRFUk4gPSAvXlN5bWJvbFxcKCguKz8pXFwpJC87XHJcblxyXG5jb25zdCBtcmtkID0gZnVuY3Rpb24gbXJrZCggbWFya2VyLCBlbnRpdHksIHN0cmljdCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwibWFya2VyOnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwibnVtYmVyXCIsXHJcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxyXG5cdFx0XHRcdFx0XCJzeW1ib2xcIlxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXHJcblx0XHRcdFx0XCJzdHJpY3RcIjogXCJib29sZWFuXCJcclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIG1hcmtlciApIHx8ICFwcm90eXBlKCBtYXJrZXIsIE5VTUJFUiArIFNZTUJPTCArIFNUUklORyApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBtYXJrZXJcIiApO1xyXG5cdH1cclxuXHJcblx0bWFya2VyID0geGNhdmF0ZSggbWFya2VyLCBlbnRpdHkgKTtcclxuXHJcblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xyXG5cdGVudGl0eSA9IGRlcGhlciggcGFyYW1ldGVyLCBbIEZVTkNUSU9OLCBPQkpFQ1QgXSwgemVsZiggdGhpcyApICk7XHJcblxyXG5cdHN0cmljdCA9IGRlcGhlciggcGFyYW1ldGVyLCBCT09MRUFOLCBmYWxzZSApO1xyXG5cclxuXHRpZiggc3RyaWN0ICl7XHJcblx0XHRyZXR1cm4ga2VpbiggbWFya2VyLCBlbnRpdHkgKSAmJiAoIGVudGl0eVsgbWFya2VyIF0gPT09IG1hcmtlciApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGtlaW4oIG1hcmtlciwgZW50aXR5ICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1ya2Q7XHJcbiJdfQ==
//# sourceMappingURL=mrkd.support.js.map
