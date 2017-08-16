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

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOzs7Ozs7Ozs7QUFTQTs7QUFFQUUsU0FBVSxNQUFWLEVBQWtCLFlBQU87O0FBRXhCLEtBQUlDLHdCQUF1QkYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQTNCOztBQUVBSCxVQUFVLHNEQUFWLEVBQWtFLFlBQU87QUFDeEVJLEtBQUkseUJBQUosRUFBK0IsWUFBTztBQUNyQztBQUNIOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBbEJEO0FBbUJBLEVBcEJEOztBQXNCQU4sVUFBVSxvRkFBVixFQUFnRyxZQUFPO0FBQ3RHSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87QUFDckM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXZCRDtBQXdCQSxFQXpCRDs7QUEyQkFOLFVBQVUsMEZBQVYsRUFBc0csWUFBTztBQUM1R0ksS0FBSSwwQkFBSixFQUFnQyxZQUFPOztBQUV0QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjQyxNQUFkLEVBQXNCLEtBQXRCOztBQUVBLEdBeEJEO0FBeUJBLEVBMUJEOztBQTRCQU4sVUFBVSx5SUFBVixFQUFxSixZQUFPO0FBQzNKSSxLQUFJLHlCQUFKLEVBQStCLFlBQU87O0FBRXJDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBO0FBQ0dQLFVBQU9RLEtBQVAsQ0FBY0MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQTFCRDtBQTJCQSxFQTVCRDs7QUE4QkFOLFVBQVUsK0lBQVYsRUFBMkosWUFBTztBQUNqS0ksS0FBSSx5QkFBSixFQUErQixZQUFPOztBQUVyQztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNHUCxVQUFPUSxLQUFQLENBQWNDLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0ExQkQ7QUEyQkEsRUE1QkQ7O0FBOEJBLENBN0lEOztBQStJQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHRlc3QtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLXRlc3QtbGljZW5zZVxuXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwibXJrZFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwibXJrZC90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvbXJrZC5naXRcIlxuXHRcdH1cblx0QGVuZC10ZXN0LWNvbmZpZ3VyYXRpb25cblxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxuXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcblx0XHRcdFwibXJrZFwiOiBcIm1ya2RcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5cblxuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuXG5kZXNjcmliZSggXCJtcmtkXCIsICggKSA9PiB7XG5cblx0bGV0IGJyaWRnZVVSTCA9IGBmaWxlOi8vJHsgcGF0aC5yZXNvbHZlKCBfX2Rpcm5hbWUsIFwiYnJpZGdlLmh0bWxcIiApIH1gO1xuXG5cdGRlc2NyaWJlKCBcImBtcmtkKCAnaGVsbG8nLCB7IFsgU3ltYm9sKCAnaGVsbG8nICkgXTogJ3llYWgnIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXG5cdFx0XHRcdFx0bGV0IHggPSB7IH07XG5cdFx0XHRcdFx0eFsgU3ltYm9sKCBcImhlbGxvXCIgKSBdID0gXCJ5ZWFoXCI7XG5cdFx0XHRcdFx0cmV0dXJuIG1ya2QoIFwiaGVsbG9cIiwgeCApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbXJrZCggJ3Rlc3QnLCB7IFsgU3ltYm9sKCAnaGVsbG8nICkgXTogJ3llYWgnLCBbIFN5bWJvbCggJ3Rlc3QnICkgXTogJ3dvcmxkJyB9IClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvIHRydWVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB4ID0geyB9O1xuXHRcdFx0XHRcdHhbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IFwieWVhaFwiO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBTeW1ib2woIFwidGVzdFwiICk7XG5cdFx0XHRcdFx0eFsgdGVzdCBdID0gXCJ3b3JsZFwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIG1ya2QoIFwidGVzdFwiLCB4ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYG1ya2QoICd0ZXN0JywgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06ICd5ZWFoJywgWyBTeW1ib2woICd0ZXN0JyApIF06ICd3b3JsZCcgfSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byBmYWxzZVwiLCAoICkgPT4ge1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgeCA9IHsgfTtcblx0XHRcdFx0XHR4WyBTeW1ib2woIFwiaGVsbG9cIiApIF0gPSBcInllYWhcIjtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gU3ltYm9sKCBcInRlc3RcIiApO1xuXHRcdFx0XHRcdHhbIHRlc3QgXSA9IFwid29ybGRcIjtcblxuXHRcdFx0XHRcdHJldHVybiBtcmtkKCBcInRlc3RcIiwgeCwgdHJ1ZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgbXJrZCggU3ltYm9sKCAndGVzdDInICksIHsgWyBTeW1ib2woICdoZWxsbycgKSBdOiAneWVhaCcsIFsgU3ltYm9sKCAndGVzdCcgKSBdOiAnd29ybGQnLCBbIFN5bWJvbCggJ3Rlc3QyJyApIF06IFN5bWJvbCggJ3Rlc3QyJyApIH0gKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gdHJ1ZVwiLCAoICkgPT4ge1xuXG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cblx0XHRcdFx0XHRsZXQgeCA9IHsgfTtcblx0XHRcdFx0XHR4WyBTeW1ib2woIFwiaGVsbG9cIiApIF0gPSBcInllYWhcIjtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gU3ltYm9sKCBcInRlc3RcIiApO1xuXHRcdFx0XHRcdHhbIHRlc3QgXSA9IFwid29ybGRcIjtcblxuXHRcdFx0XHRcdGxldCB0ZXN0MiA9IFN5bWJvbCggXCJ0ZXN0MlwiICk7XG5cdFx0XHRcdFx0eFsgdGVzdDIgXSA9IHRlc3QyO1xuXG5cdFx0XHRcdFx0cmV0dXJuIG1ya2QoIHRlc3QyLCB4ICk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBtcmtkKCBTeW1ib2woICd0ZXN0MicgKSwgeyBbIFN5bWJvbCggJ2hlbGxvJyApIF06ICd5ZWFoJywgWyBTeW1ib2woICd0ZXN0JyApIF06ICd3b3JsZCcsIFsgU3ltYm9sKCAndGVzdDInICkgXTogU3ltYm9sKCAndGVzdDInICkgfSwgdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byB0cnVlXCIsICggKSA9PiB7XG5cblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblxuXHRcdFx0XHRcdGxldCB4ID0geyB9O1xuXHRcdFx0XHRcdHhbIFN5bWJvbCggXCJoZWxsb1wiICkgXSA9IFwieWVhaFwiO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QgPSBTeW1ib2woIFwidGVzdFwiICk7XG5cdFx0XHRcdFx0eFsgdGVzdCBdID0gXCJ3b3JsZFwiO1xuXG5cdFx0XHRcdFx0bGV0IHRlc3QyID0gU3ltYm9sKCBcInRlc3QyXCIgKTtcblx0XHRcdFx0XHR4WyB0ZXN0MiBdID0gdGVzdDI7XG5cblx0XHRcdFx0XHRyZXR1cm4gbXJrZCggdGVzdDIsIHgsIHRydWUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cbn0gKTtcblxuLy86IEBlbmQtYnJpZGdlXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
