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
              */

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("mrkd", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`mrkd( 'hello', { [ Symbol( 'hello' ) ]: 'yeah' } )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let x = { };
   					x[ Symbol( "hello" ) ] = "yeah";
   					return mrkd( "hello", x );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`mrkd( 'test', { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world' } )`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let x = { };
   					x[ Symbol( "hello" ) ] = "yeah";
   
   					let test = Symbol( "test" );
   					x[ test ] = "world";
   
   					return mrkd( "test", x );
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`mrkd( 'test', { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world' }, true )`", function () {
		it("should be equal to false", function () {

			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let x = { };
   					x[ Symbol( "hello" ) ] = "yeah";
   
   					let test = Symbol( "test" );
   					x[ test ] = "world";
   
   					return mrkd( "test", x, true );
   
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, false);

		});
	});

	describe("`mrkd( Symbol( 'test2' ), { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world', [ Symbol( 'test2' ) ]: Symbol( 'test2' ) } )`", function () {
		it("should be equal to true", function () {

			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let x = { };
   					x[ Symbol( "hello" ) ] = "yeah";
   
   					let test = Symbol( "test" );
   					x[ test ] = "world";
   
   					let test2 = Symbol( "test2" );
   					x[ test2 ] = test2;
   
   					return mrkd( test2, x );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`mrkd( Symbol( 'test2' ), { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world', [ Symbol( 'test2' ) ]: Symbol( 'test2' ) }, true )`", function () {
		it("should be equal to true", function () {

			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let x = { };
   					x[ Symbol( "hello" ) ] = "yeah";
   
   					let test = Symbol( "test" );
   					x[ test ] = "world";
   
   					let test2 = Symbol( "test2" );
   					x[ test2 ] = test2;
   
   					return mrkd( test2, x, true );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

	describe("`mrkd with symbol type marker and function type entity`", function () {
		it("should be equal to true", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   
   					let Hello = function Hello( ){ };
   					Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );
   
   					return mrkd( Symbol.for( "extensive" ), Hello );
   
   				}
   
   			).value;
   			//: @end-ignore
			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHNEQUFWLEVBQWtFLFlBQU87QUFDeEVJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQztBQUNIOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBbEJEO0FBbUJBLEVBcEJEOztBQXNCQU4sVUFBVSxvRkFBVixFQUFnRyxZQUFPO0FBQ3RHSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXZCRDtBQXdCQSxFQXpCRDs7QUEyQkFOLFVBQVUsMEZBQVYsRUFBc0csWUFBTztBQUM1R0ksS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLEtBQXRCOztBQUVBLEdBeEJEO0FBeUJBLEVBMUJEOztBQTRCQU4sVUFBVSx5SUFBVixFQUFxSixZQUFPO0FBQzNKSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQTFCRDtBQTJCQSxFQTVCRDs7QUE4QkFOLFVBQVUsK0lBQVYsRUFBMkosWUFBTztBQUNqS0ksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0ExQkQ7QUEyQkEsRUE1QkQ7O0FBOEJBTixVQUFVLHlEQUFWLEVBQXFFLFlBQU87QUFDM0VJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQztBQUNIOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQW5CRDtBQW9CQSxFQXJCRDs7QUF1QkEsQ0FwS0Q7O0FBc0tBIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJtcmtkXCIsXG5cdFx0XHRcInBhdGhcIjogXCJtcmtkL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9tcmtkLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJtcmtkXCI6IFwibXJrZFwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cblxuXG4vLzogQGJyaWRnZTpcbmNvbnN0IHBhdGggPSByZXF1aXJlKCBcInBhdGhcIiApO1xuLy86IEBlbmQtYnJpZGdlXG5cblxuXG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5cbmRlc2NyaWJlKCBcIm1ya2RcIiwgKCApID0+IHtcblxuXHRsZXQgYnJpZGdlVVJMID0gYGZpbGU6Ly8keyBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICkgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYG1ya2QoICdoZWxsbycsIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiAneWVhaCcgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgeCA9IHsgfTtcblx0XHRcdFx0XHR4WyBTeW1ib2woIFwiaGVsbG9cIiApIF0gPSBcInllYWhcIjtcblx0XHRcdFx0XHRyZXR1cm4gbXJrZCggXCJoZWxsb1wiLCB4ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBtcmtkKCAndGVzdCcsIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiAneWVhaCcsIFsgU3ltYm9sKCAndGVzdCcgKSBdOiAnd29ybGQnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IHggPSB7IH07XG5cdFx0XHRcdFx0eFsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gXCJ5ZWFoXCI7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IFN5bWJvbCggXCJ0ZXN0XCIgKTtcblx0XHRcdFx0XHR4WyB0ZXN0IF0gPSBcIndvcmxkXCI7XG5cblx0XHRcdFx0XHRyZXR1cm4gbXJrZCggXCJ0ZXN0XCIsIHggKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbXJrZCggJ3Rlc3QnLCB7IFsgU3ltYm9sKCAnaGVsbG8nICkgXTogJ3llYWgnLCBbIFN5bWJvbCggJ3Rlc3QnICkgXTogJ3dvcmxkJyB9LCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIGZhbHNlXCIsICggKSA9PiB7XG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB4ID0geyB9O1xuXHRcdFx0XHRcdHhbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IFwieWVhaFwiO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBTeW1ib2woIFwidGVzdFwiICk7XG5cdFx0XHRcdFx0eFsgdGVzdCBdID0gXCJ3b3JsZFwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIG1ya2QoIFwidGVzdFwiLCB4LCB0cnVlICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgZmFsc2UgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBtcmtkKCBTeW1ib2woICd0ZXN0MicgKSwgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06ICd5ZWFoJywgWyBTeW1ib2woICd0ZXN0JyApIF06ICd3b3JsZCcsIFsgU3ltYm9sKCAndGVzdDInICkgXTogU3ltYm9sKCAndGVzdDInICkgfSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB4ID0geyB9O1xuXHRcdFx0XHRcdHhbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IFwieWVhaFwiO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBTeW1ib2woIFwidGVzdFwiICk7XG5cdFx0XHRcdFx0eFsgdGVzdCBdID0gXCJ3b3JsZFwiO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QyID0gU3ltYm9sKCBcInRlc3QyXCIgKTtcblx0XHRcdFx0XHR4WyB0ZXN0MiBdID0gdGVzdDI7XG5cblx0XHRcdFx0XHRyZXR1cm4gbXJrZCggdGVzdDIsIHggKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG1ya2QoIFN5bWJvbCggJ3Rlc3QyJyApLCB7IFsgU3ltYm9sKCAnaGVsbG8nICkgXTogJ3llYWgnLCBbIFN5bWJvbCggJ3Rlc3QnICkgXTogJ3dvcmxkJywgWyBTeW1ib2woICd0ZXN0MicgKSBdOiBTeW1ib2woICd0ZXN0MicgKSB9LCB0cnVlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblxuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IHggPSB7IH07XG5cdFx0XHRcdFx0eFsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gXCJ5ZWFoXCI7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IFN5bWJvbCggXCJ0ZXN0XCIgKTtcblx0XHRcdFx0XHR4WyB0ZXN0IF0gPSBcIndvcmxkXCI7XG5cblx0XHRcdFx0XHRsZXQgdGVzdDIgPSBTeW1ib2woIFwidGVzdDJcIiApO1xuXHRcdFx0XHRcdHhbIHRlc3QyIF0gPSB0ZXN0MjtcblxuXHRcdFx0XHRcdHJldHVybiBtcmtkKCB0ZXN0MiwgeCwgdHJ1ZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbXJrZCB3aXRoIHN5bWJvbCB0eXBlIG1hcmtlciBhbmQgZnVuY3Rpb24gdHlwZSBlbnRpdHlgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCBIZWxsbyA9IGZ1bmN0aW9uIEhlbGxvKCApeyB9O1xuXHRcdFx0XHRcdEhlbGxvWyBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICkgXSA9IFN5bWJvbC5mb3IoIFwiZXh0ZW5zaXZlXCIgKTtcblxuXHRcdFx0XHRcdHJldHVybiBtcmtkKCBTeW1ib2wuZm9yKCBcImV4dGVuc2l2ZVwiICksIEhlbGxvICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
