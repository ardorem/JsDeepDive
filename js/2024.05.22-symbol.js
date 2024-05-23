const key = Symbol('e4jk2');
console.log( typeof key); // symbol

var obj = {};

obj[key] = 'value';
console.log( obj[key] ); // value
