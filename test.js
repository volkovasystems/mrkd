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

const assert = require( "should" );

//: @server:
const mrkd = require( "./mrkd.js" );
//: @end-server






//: @server:

describe( "mrkd", ( ) => {

	describe( "`mrkd( 'hello', { [ Symbol( 'hello' ) ]: 'yeah' } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let x = { };
			x[ Symbol( "hello" ) ] = "yeah";

			assert.equal( mrkd( "hello", x ), true );

		} );
	} );

	describe( "`mrkd( 'test', { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world' } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let x = { };
			x[ Symbol( "hello" ) ] = "yeah";

			let test = Symbol( "test" );
			x[ test ] = "world";

			assert.equal( mrkd( "test", x ), true );

		} );
	} );

	describe( "`mrkd( 'test', { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world' }, true )`", ( ) => {
		it( "should be equal to false", ( ) => {

			let x = { };
			x[ Symbol( "hello" ) ] = "yeah";

			let test = Symbol( "test" );
			x[ test ] = "world";

			assert.equal( mrkd( "test", x, true ), false );

		} );
	} );

	describe( "`mrkd( Symbol( 'test2' ), { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world', [ Symbol( 'test2' ) ]: Symbol( 'test2' ) } )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let x = { };
			x[ Symbol( "hello" ) ] = "yeah";

			let test = Symbol( "test" );
			x[ test ] = "world";

			let test2 = Symbol( "test2" );
			x[ test2 ] = test2;

			assert.equal( mrkd( test2, x ), true );

		} );
	} );

	describe( "`mrkd( Symbol( 'test2' ), { [ Symbol( 'hello' ) ]: 'yeah', [ Symbol( 'test' ) ]: 'world', [ Symbol( 'test2' ) ]: Symbol( 'test2' ) }, true )`", ( ) => {
		it( "should be equal to true", ( ) => {

			let x = { };
			x[ Symbol( "hello" ) ] = "yeah";

			let test = Symbol( "test" );
			x[ test ] = "world";

			let test2 = Symbol( "test2" );
			x[ test2 ] = test2;

			assert.equal( mrkd( test2, x, true ), true );

		} );
	} );

} );

//: @end-server






