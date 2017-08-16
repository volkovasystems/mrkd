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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ya2Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJkZXBoZXIiLCJyZXF1aXJlIiwiZmFsenkiLCJrZWluIiwicHJvdHlwZSIsInJhemUiLCJ4Y2F2YXRlIiwiemVsZiIsIlNZTUJPTF9QQVRURVJOIiwibXJrZCIsIm1hcmtlciIsImVudGl0eSIsInN0cmljdCIsIk5VTUJFUiIsIlNZTUJPTCIsIlNUUklORyIsIkVycm9yIiwicGFyYW1ldGVyIiwiYXJndW1lbnRzIiwiRlVOQ1RJT04iLCJPQkpFQ1QiLCJCT09MRUFOIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUVBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUMsUUFBUUQsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNRSxPQUFRRixRQUFTLE1BQVQsQ0FBZDtBQUNBLElBQU1HLFVBQVVILFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sT0FBT04sUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTU8saUJBQWlCLG1CQUF2Qjs7QUFFQSxJQUFNQyxPQUFPLFNBQVNBLElBQVQsQ0FBZUMsTUFBZixFQUF1QkMsTUFBdkIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQ25EOzs7Ozs7Ozs7Ozs7OztBQWNBLEtBQUlWLE1BQU9RLE1BQVAsS0FBbUIsQ0FBQ04sUUFBU00sTUFBVCxFQUFpQkcsU0FBU0MsTUFBVCxHQUFrQkMsTUFBbkMsQ0FBeEIsRUFBcUU7QUFDcEUsUUFBTSxJQUFJQyxLQUFKLENBQVcsZ0JBQVgsQ0FBTjtBQUNBOztBQUVETixVQUFTSixRQUFTSSxNQUFULEVBQWlCQyxNQUFqQixDQUFUOztBQUVBLEtBQUlNLFlBQVlaLEtBQU1hLFNBQU4sQ0FBaEI7QUFDQVAsVUFBU1gsT0FBUWlCLFNBQVIsRUFBbUIsQ0FBRUUsUUFBRixFQUFZQyxNQUFaLENBQW5CLEVBQXlDYixLQUFNLElBQU4sQ0FBekMsQ0FBVDs7QUFFQUssVUFBU1osT0FBUWlCLFNBQVIsRUFBbUJJLE9BQW5CLEVBQTRCLEtBQTVCLENBQVQ7O0FBRUEsS0FBSVQsTUFBSixFQUFZO0FBQ1gsU0FBT1QsS0FBTU8sTUFBTixFQUFjQyxNQUFkLEtBQTRCQSxPQUFRRCxNQUFSLE1BQXFCQSxNQUF4RDtBQUNBOztBQUVELFFBQU9QLEtBQU1PLE1BQU4sRUFBY0MsTUFBZCxDQUFQO0FBQ0EsQ0EvQkQ7O0FBaUNBVyxPQUFPQyxPQUFQLEdBQWlCZCxJQUFqQiIsImZpbGUiOiJtcmtkLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibXJrZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibXJrZC9tcmtkLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJtcmtkLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm1ya2RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL21ya2QuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJtcmtkLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0Q2hlY2tzIGlmIGVudGl0eSBpcyBtYXJrZWQgYnkgdW5pcXVlIHN5bWJvbC5cblxuXHRcdFN0cmljdCBtb2RlIGNoZWNrIGlmIHRoZSBtYXJrZXIgaXMgYSBidXJuZWQgbWFyay5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZGVwaGVyXCI6IFwiZGVwaGVyXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwia2VpblwiOiBcImtlaW5cIixcblx0XHRcdFwibXRjaFwiOiBcIm10Y2hcIixcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcblx0XHRcdFwicmF6ZVwiOiBcInJhemVcIixcblx0XHRcdFwieGNhdmF0ZVwiOiBcInhjYXZhdGVcIixcblx0XHRcdFwiemVsZlwiOiBcInplbGZcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkZXBoZXIgPSByZXF1aXJlKCBcImRlcGhlclwiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3Qga2VpbiA9ICByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5jb25zdCByYXplID0gcmVxdWlyZSggXCJyYXplXCIgKTtcbmNvbnN0IHhjYXZhdGUgPSByZXF1aXJlKCBcInhjYXZhdGVcIiApO1xuY29uc3QgemVsZiA9IHJlcXVpcmUoIFwiemVsZlwiICk7XG5cbmNvbnN0IFNZTUJPTF9QQVRURVJOID0gL15TeW1ib2xcXCgoLis/KVxcKSQvO1xuXG5jb25zdCBtcmtkID0gZnVuY3Rpb24gbXJrZCggbWFya2VyLCBlbnRpdHksIHN0cmljdCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm1hcmtlcjpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwic3ltYm9sXCJcblx0XHRcdFx0XSxcblx0XHRcdFx0XCJlbnRpdHk6cmVxdWlyZWRcIjogXCIqXCIsXG5cdFx0XHRcdFwic3RyaWN0XCI6IFwiYm9vbGVhblwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIG1hcmtlciApIHx8ICFwcm90eXBlKCBtYXJrZXIsIE5VTUJFUiArIFNZTUJPTCArIFNUUklORyApICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgbWFya2VyXCIgKTtcblx0fVxuXG5cdG1hcmtlciA9IHhjYXZhdGUoIG1hcmtlciwgZW50aXR5ICk7XG5cblx0bGV0IHBhcmFtZXRlciA9IHJhemUoIGFyZ3VtZW50cyApO1xuXHRlbnRpdHkgPSBkZXBoZXIoIHBhcmFtZXRlciwgWyBGVU5DVElPTiwgT0JKRUNUIF0sIHplbGYoIHRoaXMgKSApO1xuXG5cdHN0cmljdCA9IGRlcGhlciggcGFyYW1ldGVyLCBCT09MRUFOLCBmYWxzZSApO1xuXG5cdGlmKCBzdHJpY3QgKXtcblx0XHRyZXR1cm4ga2VpbiggbWFya2VyLCBlbnRpdHkgKSAmJiAoIGVudGl0eVsgbWFya2VyIF0gPT09IG1hcmtlciApO1xuXHR9XG5cblx0cmV0dXJuIGtlaW4oIG1hcmtlciwgZW50aXR5ICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1ya2Q7XG4iXX0=
//# sourceMappingURL=mrkd.support.js.map
