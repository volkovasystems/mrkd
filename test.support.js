"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "mrkd",
              			"path": "mrkd/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/mrkd.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should",
              			"mrkd": "mrkd"
              		}
              	@end-include
              */var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should");



//: @client:
var mrkd = require("./mrkd.support.js");
//: @end-client







//: @client:

describe("mrkd", function () {

	describe("`mrkd( 'hello', { [ Symbol( 'hello' ) ]: 'yeah' } )`", function () {
		it("should be equal to true", function () {

			var x = {};
			x[(0, _symbol2.default)("hello")] = "yeah";

			assert.equal(mrkd("hello", x), true);

		});
	});

	describe("`mrkd( 'test', { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world' } )`", function () {
		it("should be equal to true", function () {

			var x = {};
			x[(0, _symbol2.default)("hello")] = "yeah";

			var test = (0, _symbol2.default)("test");
			x[test] = "world";

			assert.equal(mrkd("test", x), true);

		});
	});

	describe("`mrkd( 'test', { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world' }, true )`", function () {
		it("should be equal to false", function () {

			var x = {};
			x[(0, _symbol2.default)("hello")] = "yeah";

			var test = (0, _symbol2.default)("test");
			x[test] = "world";

			assert.equal(mrkd("test", x, true), false);

		});
	});

	describe("`mrkd( Symbol( 'test2' ), { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world', [ Symbol( 'test2' ) ]: Symbol( 'test2' ) } )`", function () {
		it("should be equal to true", function () {

			var x = {};
			x[(0, _symbol2.default)("hello")] = "yeah";

			var test = (0, _symbol2.default)("test");
			x[test] = "world";

			var test2 = (0, _symbol2.default)("test2");
			x[test2] = test2;

			assert.equal(mrkd(test2, x), true);

		});
	});

	describe("`mrkd( Symbol( 'test2' ), { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world', [ Symbol( 'test2' ) ]: Symbol( 'test2' ) }, true )`", function () {
		it("should be equal to true", function () {

			var x = {};
			x[(0, _symbol2.default)("hello")] = "yeah";

			var test = (0, _symbol2.default)("test");
			x[test] = "world";

			var test2 = (0, _symbol2.default)("test2");
			x[test2] = test2;

			assert.equal(mrkd(test2, x, true), true);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwibXJrZCIsImRlc2NyaWJlIiwiaXQiLCJ4IiwiZXF1YWwiLCJ0ZXN0IiwidGVzdDIiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtREEsSUFBTUEsU0FBU0MsUUFBUyxRQUFULENBQWY7Ozs7QUFJQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsbUJBQVQsQ0FBYjtBQUNBOzs7Ozs7OztBQVFBOztBQUVBRSxTQUFVLE1BQVYsRUFBa0IsWUFBTzs7QUFFeEJBLFVBQVUsc0RBQVYsRUFBa0UsWUFBTztBQUN4RUMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxJQUFJLEVBQVI7QUFDQUEsS0FBRyxzQkFBUSxPQUFSLENBQUgsSUFBeUIsTUFBekI7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0osS0FBTSxPQUFOLEVBQWVHLENBQWYsQ0FBZCxFQUFrQyxJQUFsQzs7QUFFQSxHQVBEO0FBUUEsRUFURDs7QUFXQUYsVUFBVSxvRkFBVixFQUFnRyxZQUFPO0FBQ3RHQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLElBQUksRUFBUjtBQUNBQSxLQUFHLHNCQUFRLE9BQVIsQ0FBSCxJQUF5QixNQUF6Qjs7QUFFQSxPQUFJRSxPQUFPLHNCQUFRLE1BQVIsQ0FBWDtBQUNBRixLQUFHRSxJQUFILElBQVksT0FBWjs7QUFFQVAsVUFBT00sS0FBUCxDQUFjSixLQUFNLE1BQU4sRUFBY0csQ0FBZCxDQUFkLEVBQWlDLElBQWpDOztBQUVBLEdBVkQ7QUFXQSxFQVpEOztBQWNBRixVQUFVLDBGQUFWLEVBQXNHLFlBQU87QUFDNUdDLEtBQUksMEJBQUosRUFBZ0MsWUFBTzs7QUFFdEMsT0FBSUMsSUFBSSxFQUFSO0FBQ0FBLEtBQUcsc0JBQVEsT0FBUixDQUFILElBQXlCLE1BQXpCOztBQUVBLE9BQUlFLE9BQU8sc0JBQVEsTUFBUixDQUFYO0FBQ0FGLEtBQUdFLElBQUgsSUFBWSxPQUFaOztBQUVBUCxVQUFPTSxLQUFQLENBQWNKLEtBQU0sTUFBTixFQUFjRyxDQUFkLEVBQWlCLElBQWpCLENBQWQsRUFBdUMsS0FBdkM7O0FBRUEsR0FWRDtBQVdBLEVBWkQ7O0FBY0FGLFVBQVUseUlBQVYsRUFBcUosWUFBTztBQUMzSkMsS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQyxPQUFJQyxJQUFJLEVBQVI7QUFDQUEsS0FBRyxzQkFBUSxPQUFSLENBQUgsSUFBeUIsTUFBekI7O0FBRUEsT0FBSUUsT0FBTyxzQkFBUSxNQUFSLENBQVg7QUFDQUYsS0FBR0UsSUFBSCxJQUFZLE9BQVo7O0FBRUEsT0FBSUMsUUFBUSxzQkFBUSxPQUFSLENBQVo7QUFDQUgsS0FBR0csS0FBSCxJQUFhQSxLQUFiOztBQUVBUixVQUFPTSxLQUFQLENBQWNKLEtBQU1NLEtBQU4sRUFBYUgsQ0FBYixDQUFkLEVBQWdDLElBQWhDOztBQUVBLEdBYkQ7QUFjQSxFQWZEOztBQWlCQUYsVUFBVSwrSUFBVixFQUEySixZQUFPO0FBQ2pLQyxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDLE9BQUlDLElBQUksRUFBUjtBQUNBQSxLQUFHLHNCQUFRLE9BQVIsQ0FBSCxJQUF5QixNQUF6Qjs7QUFFQSxPQUFJRSxPQUFPLHNCQUFRLE1BQVIsQ0FBWDtBQUNBRixLQUFHRSxJQUFILElBQVksT0FBWjs7QUFFQSxPQUFJQyxRQUFRLHNCQUFRLE9BQVIsQ0FBWjtBQUNBSCxLQUFHRyxLQUFILElBQWFBLEtBQWI7O0FBRUFSLFVBQU9NLEtBQVAsQ0FBY0osS0FBTU0sS0FBTixFQUFhSCxDQUFiLEVBQWdCLElBQWhCLENBQWQsRUFBc0MsSUFBdEM7O0FBRUEsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBLENBM0VEOztBQTZFQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcIm1ya2RcIixcblx0XHRcdFwicGF0aFwiOiBcIm1ya2QvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL21ya2QuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcIm1ya2RcIjogXCJtcmtkXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBtcmtkID0gcmVxdWlyZSggXCIuL21ya2Quc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcIm1ya2RcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgbXJrZCggJ2hlbGxvJywgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06ICd5ZWFoJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHggPSB7IH07XG5cdFx0XHR4WyBTeW1ib2woIFwiaGVsbG9cIiApIF0gPSBcInllYWhcIjtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBtcmtkKCBcImhlbGxvXCIsIHggKSwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG1ya2QoICd0ZXN0JywgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06ICd5ZWFoJywgWyBTeW1ib2woICd0ZXN0JyApIF06ICd3b3JsZCcgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB4ID0geyB9O1xuXHRcdFx0eFsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gXCJ5ZWFoXCI7XG5cblx0XHRcdGxldCB0ZXN0ID0gU3ltYm9sKCBcInRlc3RcIiApO1xuXHRcdFx0eFsgdGVzdCBdID0gXCJ3b3JsZFwiO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG1ya2QoIFwidGVzdFwiLCB4ICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBtcmtkKCAndGVzdCcsIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiAneWVhaCcsIFsgU3ltYm9sKCAndGVzdCcgKSBdOiAnd29ybGQnIH0sIHRydWUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gZmFsc2VcIiwgKCApID0+IHtcblxuXHRcdFx0bGV0IHggPSB7IH07XG5cdFx0XHR4WyBTeW1ib2woIFwiaGVsbG9cIiApIF0gPSBcInllYWhcIjtcblxuXHRcdFx0bGV0IHRlc3QgPSBTeW1ib2woIFwidGVzdFwiICk7XG5cdFx0XHR4WyB0ZXN0IF0gPSBcIndvcmxkXCI7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggbXJrZCggXCJ0ZXN0XCIsIHgsIHRydWUgKSwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBtcmtkKCBTeW1ib2woICd0ZXN0MicgKSwgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06ICd5ZWFoJywgWyBTeW1ib2woICd0ZXN0JyApIF06ICd3b3JsZCcsIFsgU3ltYm9sKCAndGVzdDInICkgXTogU3ltYm9sKCAndGVzdDInICkgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB4ID0geyB9O1xuXHRcdFx0eFsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gXCJ5ZWFoXCI7XG5cblx0XHRcdGxldCB0ZXN0ID0gU3ltYm9sKCBcInRlc3RcIiApO1xuXHRcdFx0eFsgdGVzdCBdID0gXCJ3b3JsZFwiO1xuXG5cdFx0XHRsZXQgdGVzdDIgPSBTeW1ib2woIFwidGVzdDJcIiApO1xuXHRcdFx0eFsgdGVzdDIgXSA9IHRlc3QyO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG1ya2QoIHRlc3QyLCB4ICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBtcmtkKCBTeW1ib2woICd0ZXN0MicgKSwgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06ICd5ZWFoJywgWyBTeW1ib2woICd0ZXN0JyApIF06ICd3b3JsZCcsIFsgU3ltYm9sKCAndGVzdDInICkgXTogU3ltYm9sKCAndGVzdDInICkgfSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdGxldCB4ID0geyB9O1xuXHRcdFx0eFsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gXCJ5ZWFoXCI7XG5cblx0XHRcdGxldCB0ZXN0ID0gU3ltYm9sKCBcInRlc3RcIiApO1xuXHRcdFx0eFsgdGVzdCBdID0gXCJ3b3JsZFwiO1xuXG5cdFx0XHRsZXQgdGVzdDIgPSBTeW1ib2woIFwidGVzdDJcIiApO1xuXHRcdFx0eFsgdGVzdDIgXSA9IHRlc3QyO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIG1ya2QoIHRlc3QyLCB4LCB0cnVlICksIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuIl19
//# sourceMappingURL=test.support.js.map
