
const mrkd = require( "./mrkd.js" );

let x = { };
x[ Symbol( "hello" ) ] = "yeah";

console.log( mrkd( "hello", x ) );

let test = Symbol( "test" );
x[ test ] = "world";

console.log( mrkd( "test", x ) );
console.log( mrkd( "test", x, true ) );

let test2 = Symbol( "test2" );
x[ test2 ] = test2;

console.log( mrkd( test2, x, true ) );
console.log( mrkd( test2, x ) );
