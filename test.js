// function add(x, y) {
//     return x + y;
// }

// console.dir(add);
// console.log(add(2, 5));

// var add = function add(x, y) {
//     return x + y;
// };

// console.log(add(2, 5));

// p.160

// var add = function add(x, y) {
//     return x + y;
// };

// console.log(add(2, 5));

// var add = function (x, y) {
//     return x + y;
// };
// console.log(add(2, 5));

// console.dir(add);
// console.dir(sub);

// console.log(add(2, 5));
// console.log(sub(2, 5));

// function add(x, y) {
//     return x + y;
// }

// var sub = function (x, y) {
//     return x - y;
// };

// var add = new Function('x', 'y', 'return x + y');
// console.log(add(2, 5));

// var add1 = (function() {
//     var a = 10;
//     return function (x, y) {
//         return x + y + a;
//     };
// }());

// console.log(add1(1, 2));

// var add2 = (function() {
//     var a = 10;
//     return new Function('x', 'y', 'return x + y + a;');
// }());

// console.log(add2(1, 2));

// const add = (x, y) => x + y;
// console.log(add(2, 4));

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new TypeError('it should be a number');
//     }
//     return x + y;
// }

// console.log(add(2));
// console.log(add('a', 'b'));

// function add(a, b, c) {
//     a = a || 0;
//     b = b || 0;
//     c = c || 0;
//     return a + b + c;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2));
// console.log(add());

// function changeVal(primitive, obj) {
//     primitive += 100;
//     obj.name = 'kim';
// }

// var num = 100;
// var person = {name: 'Lee'};

// console.log(num);
// console.log(person);

// changeVal(num, person);

// console.log(num);
// console.log(person);

// var res = (function() {
//     var a = 3;
//     var b = 5;
//     return a * b;
// }());

// console.log(res);

// res = (function(a, b) {
//     return a * b;
// }(3, 5));

// console.log(res);

// function outer() {
//     var x = 1;

//     function inner() {
//         var y = 2;
//         console.log(x + y);
//     }
//     inner();
// }
// outer();

// function repeat(n) {
//     for(var i = 0; i < n; i++)
//         console.log(i);
// }
// repeat(5);

// function repeat(n) {
//     for(var i = 0; i < n; i++)
//         console.log(i);
// }

// repeat(5);

// function repeat2(n) {
//     for(var i = 0; i < n; i++) {
//         if(i % 2) console.log(i);
//     }
// }

// repeat2(5);

// function repeat(n, f) {
//     for(var i = 0; i < n; i++) {
//         f(i);
//     }
// }

// var logAll = function(i) {
//     console.log(i);
// };

// repeat(5, logAll);

// var logOdds = function(i) {
//     if(i % 2) console.log(i);
// };

// repeat(5, logOdds);

// repeat(5, function(i) {
//     if(i%2) console.log(i);
// });

// var res = [1, 2, 3].map(function(item) {
//     return item*2;
// });
// console.log(res);

// res = [1, 2, 3].filter(function(item) {
//     return item%2;
// });
// console.log(res);

// res = [1, 2, 3].reduce(function(acc, cur) {
//     return acc + cur;
// }, 0);
// console.log(res);

// var x = 'global';

// function foo() {
//     var x = 'local';
//     console.log(x);
// }
// foo();

// console.log(x);

// var x = "global x";
// var y = "global y";

// function outer() {
//     var z = "outer's local z";

//     console.log(x);
//     console.log(y);
//     console.log(z);

//     function inner() {
//         var x = "inner's local x";

//         console.log(x);
//         console.log(y);
//         console.log(z);
//     }
//     inner();
// }
// outer();

// console.log(x);
// console.log(z);

// var x = 1;

// function foo() {
//     var x = 10;
//     bar();
// }

// function bar() {
//     console.log(x);
// }

// foo();
// bar();

// p.200

// function foo() {
//     var x = 'local';
//     console.log(x);
//     return x;
// }

// foo();

// Property Attribute

// const person = {
//     name: 'Lee'
// };

// person.age = 20;

// console.log(Object.getOwnPropertyDescriptors(person));

// const person = {
//     firstName: 'Jongrip',
//     lastName: 'Lee',

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// };

// console.log(person.firstName + ' ' + person.lastName);
// person.fullName = 'Heegun Lee';
// console.log(person);
// console.log(person.fullName);

// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log(descriptor);

// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descriptor);

// const person = {};

// Object.defineProperty(person, 'firstName', {
//     value: 'Jongrip',
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// Object.defineProperty(person, 'lastName', {
//     value: 'Lee'
// });

// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log('firstName', descriptor);

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor);

// console.log(Object.keys(person));

// person.lastName = 'Kim';
// delete person.lastName;

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor);

// Object.defineProperty(person, 'fullName', {
//     get() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set(name) {
//         [this.firstName, this.lastName] = name.split(' ');
//     },
//     enumerable: true,
//     configurable: true
// });

// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log('fullName', descriptor);

// person.fullName = 'Heegun Lee';
// console.log(person);

// const person = {};

// Object.defineProperties(person, {
//     firstName: {
//         value: 'Joonwoo',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     lastName: {
//         value: 'Yoon',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     fullName: {
//         get() {
//             return `${this.firstName} ${this.lastName}`;
//         },
//         set(name) {
//             [this.firstName, this.lastName] = name.split(' ');
//         },
//         enumerable: true,
//         configurable: true
//     }
// });

// person.fullName = 'SeungBin Yoon';
// console.log(person);


// const person = {
//     name: 'Lee',
//     address: {city: 'Seoul'}
// };

// Object.freeze(person);

// console.log(Object.isFrozen(person));
// console.log(Object.isFrozen(person.address));

// person.address.city = 'Busan';
// console.log(person);

// function deepFreeze(target) {
//     if(target && typeof target === 'Object' && !Object.isFrozen(target)) {
//         Object.freeze(target);
//         Object.keys(target).forEach(key => deepFreeze(target[key]));
//     }
//     return target;
// }

// const person = {
//     name: 'Lee',
//     address: {city: 'Seoul'}
// };

// deepFreeze(person);

// console.log(Object.isFrozen(person));
// console.log(Object.isFrozen(person.address));

// person.address.city = 'Busan';
// console.log(person);

// const person = new Object();

// person.name = 'Lee';
// person.sayHello = function() {
//     console.log('Hi! My name is ' + this.name);
// };

// console.log(person);
// person.sayHello();

// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function() {
//         return 2 * this.radius;
//     };
// }

// const circle = new Circle(1);
// console.log(circle);

// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function() {
//         return 2 * this.radius;
//     };
// }

// const circle = Circle(5);
// console.log(circle);
// console.log(radius);
// console.log(getDiameter());

// function Circle(radius) {
//     if(!new.target) {
//         return new Circle(radius);
//     }
//     this.radius = radius;
//     this.getDiameter = function() {
//         return 2 * this.radius;
//     };
// }

// const circle = Circle(5);
// console.log(circle.getDiameter());

// const increase = function(num) {
//     return ++num;
// };

// const decrease = function(num) {
//     return --num;
// };

// const predicates = {increase, decrease};

// function makeCounter(predicate) {
//     let num = 0;
//     return function() {
//         num = predicate(num);
//         return num;
//     };
// }

// const increaser = makeCounter(predicates.increase);
// console.log(increaser());
// console.log(increaser());

// const decreaser = makeCounter(predicates.decrease);
// console.log(decreaser());
// console.log(decreaser());

// p.259