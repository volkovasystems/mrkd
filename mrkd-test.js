const assert = require( "assert" );
const mrkd = require( "./mrkd.js" );

let x = { };
x[ Symbol( "hello" ) ] = "yeah";

assert.equal( mrkd( "hello", x ), true, "should be equal to true" );

let test = Symbol( "test" );
x[ test ] = "world";

assert.equal( mrkd( "test", x ), true, "should be equal to true" );
assert.equal( mrkd( "test", x, true ), false, "should be equal to false" );

let test2 = Symbol( "test2" );
x[ test2 ] = test2;

assert.equal( mrkd( test2, x, true ), true, "should be equal to true" );
assert.equal( mrkd( test2, x ), true, "should be equal to true" );

let Hello = function Hello( ){ };
Hello[ Symbol.for( "extensive" ) ] = Symbol.for( "extensive" );

assert.equal( mrkd( Symbol.for( "extensive" ), Hello ), true, "should be equal to true" );

console.log( "ok" );
