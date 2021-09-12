// var binary = 0b01000001;
// var octal = 0o101;
// var hex = 0x41;

// console.log(binary);
// console.log(octal);
// console.log(hex);
// console.log(binary === octal);
// console.log(octal === hex);

// var first = 'Jong-rip';
// var last = 'Yoon';

// console.log('My name is ' + first + ' ' + last + '.');
// console.log(`My name is ${first} ${last}.`);
// console.log(`1 + 2 = ${1 + 2}`);

// var foo = 'Lee';
// foo = null;

// var key = Symbol('key');
// console.log(typeof key);

// var obj = {};

// obj[key] = 'value';
// console.log(obj[key]);

// var x = 3, result;

// if(x % 2) result = 'odd';
// else result = 'even';

// console.log(result);

// var num = 2;
// var kind;

// if(num > 0) {
//     kind = 'plus';
// } else if (num < 0) {
//     kind = 'minus';
// } else {
//     kind = 'zero';
// }

// console.log(kind);

// var num = 0;
// var kind = num ? (num > 0 ? 'plus' : 'minus') : 'zero';
// console.log(kind);

// foo : {
//     console.log(1);
//     break foo;
//     console.log(2);
//     console.log(3);
// }

// console.log('Done!');

// outer: for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//         if(i + j === 3) break outer;
//         console.log(`inner[${i}, ${j}]`);
//     }
// }

// console.log('Done');

// var string = 'Hello World';
// var search = 'l';
// var index;

// for (var i=0; i<string.length; i++) {
//     if(string[i] === search) {
//         index = i;
//         break;
//     }
// }

// console.log(index);

// console.log(string.indexOf(search));

// var string = 'Hello World';
// var search = 'l';
// var count = 0;

// for (var i = 0; i < string.length; i++) {
//     if(string[i] !== search) continue;
//     count++;
// }

// console.log(count);

// const regexp = new RegExp(search, 'g');
// console.log(string.match(regexp).length);

// p.118

// var done = false;
// var message = '';

// message = done || 'incomplete';
// console.log(message);

// function getStringLength(str) {
//     str = str || '';
//     return str.length;
// }

// getStringLength();
// getStringLength('hi');

// function getStringLength(str = '') {
//     return str.length;
// }

// getStringLength();
// getStringLength('hi');

// var str = '';

// var length = str?.length;
// console.log(length);

// var foo = null ?? 'default string';
// console.log(foo);

// var foo = '' ?? 'default string';
// console.log(foo);

// p.124

// var person = {
//     name: 'Lee',
//     sayHello: function() {
//         console.log(`Hello My name is ${this.name}.`);
//     }
// };

// console.log(typeof person);
// console.log(person);

// var empty = {};
// console.log(typeof empty);

// var person = {
//     name: 'Lee',
//     age: 20,
// };

// var person = {
//     firstName: 'Jong-rip',
//     'last-name': 'Lee'
// };

// console.log(person);

// var obj = {};
// var key = 'hello';

// obj[key] = 'world';

// console.log(obj);

// p.130

// var circle = {
//     radius: 5,
    
//     getDiameter: function() {
//         return 2*this.radius;
//     }
// };
// console.log(circle.getDiameter());

// var person = {
//     name: 'Lee'
// };
// console.log(person.name);
// console.log(person['name']);

// person.name = 'Kim';
// console.log(person);

// person.age = 20;
// console.log(person);

// delete person.age;
// delete person.address;

// console.log(person);

var x = 1, y = 2;

var obj = {
    x: x,
    y: y
};

console.log(obj);