// "Deep Dive"

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

// function Circle(radius) {
//     this.radius = radius;
// }

// Circle.prototype.getArea = function() {
//     return Math.PI * this.radius **2;
// };

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// console.log(circle1.getArea === circle2.getArea);
// console.log(circle1.getArea());
// console.log(circle2.getArea());

// const person = {name: 'Lee'};
// console.log(person.hasOwnProperty('__proto__'));
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// console.log({}.__proto__ === Object.prototype);

// const obj = {};
// const parent = {x: 1};

// Object.getPrototypeOf(obj);
// Object.getPrototypeOf(obj, parent);

// console.log(obj.x);

// const obj = new Object();
// console.log(obj.constructor === Object);

// const add = new Function('a', 'b', 'return a + b');
// console.log(add.constructor === Function);

// function Person(name) {
//     this.name = name;
// }

// const me = new Person('Lee');
// console.log(me.constructor === Person);

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function() {
//     console.log(`Hi! My name is &{this.name}`);
// };

// const me = new Person('Lee');
// console.log(me.hasOwnProperty('name'));

// p.285

// const Person = (function() {
//     function Person(name) {
//         this.name = name;
//     }
//     Person.prototype.sayHello = function() {
//         console.log(`Hi! My name is ${this.name}`);
//     };
//     return Person;
// }());

// const me = new Person('Lee');
// me.sayHello = function() {
//     console.log(`Hey! My name is ${this.name}`);
// };

// me.sayHello();

// const Person = (function() {
//     function Person(name) {
//         this.name = name;
//     }

//     Person.prototype = {
//         sayHello() {
//             console.log(`Hi! My name is ${this.name}`);
//         }
//     };
//     return Person;
// }());

// const me = new Person('Lee');
// console.log(me.constructor === Person);
// console.log(me.constructor === Object);

// function Person(name) {
//     this.name = name;
// }

// const me = new Person('Lee');

// const parent = {
//     constructor: Person,
//     sayHello() {
//         console.log(`Hi! My name is ${this.name}`);
//     }
// };

// Person.prototype = parent;

// Object.setPrototypeOf(me, parent);
// me.sayHello();

// const myProto = {x: 10};

// const obj = {
//     y: 20,
//     __proto__: myProto
// };

// console.log(obj.x, obj.y);
// console.log(Object.getPrototypeOf(obj) === myProto);

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHello = function() {
//     console.log(`Hi! My name is ${this.name}`);
// };

// Person.staticProp = 'static prop';
// Person.staticMethod = function() {
//     console.log('staticMethod');
// };

// const me = new Person('Lee');
// Person.staticMethod();

// const person = {
//     name: 'Lee',
//     address: 'Seoul'
// };

// for (const key in person) {
//     console.log(key + ': ' + person[key]);
// }

// const person = {
//     name: 'Lee',
//     address: 'Seoul',
//     __proto__: {age: 20}
// };

// for(const key in person) {
//     console.log(key + ': ' + person[key]);
// }

// const person = {
//     name: 'Lee',
//     address: 'Seoul',
//     __proto__: {age: 20}
// };

// for (const key in person) {
//     if(!person.hasOwnProperty(key)) continue;
//     console.log(key + ': ' + person[key]);
// }

// const obj = {
//     2: 2,
//     3: 3,
//     1: 1,
//     b: 'b',
//     a: 'a'
// };

// for (const key in obj) {
//     if (!obj.hasOwnProperty(key)) continue;
//     console.log(key + ': ' + obj[key]);
// }

// const arr = [1, 2, 3];
// arr.x = 10;

// for (const i in arr) {
//     console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(v => console.log(v));

// for (const value of arr) {
//     console.log(value);
// }

// const person = {
//     name: 'Lee',
//     address: 'Seoul',
//     __proto__: {age: 20}
// };

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// Object.entries(person).forEach(([key, value]) => console.log(key, value));

// (function() {
//     'use strict';

//     function foo() {
//         console.log(this);
//     }
//     foo();

//     function Foo() {
//         console.log(this);
//     }
//     new Foo();
// }());

// (function(a) {
//     'use strict';
//     a=2;
//     console.log(arguments);
// }(1));

// const numObj = new Number(1.5);
// console.log(numObj.toFixed());
// console.log(Number.isInteger(0.5));

// const str = 'hello';
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(typeof str);

// const person = {
//     name: 'Lee',
//     foo(callback) {
//         setTimeout(callback.bind(this), 100);
//     }
// };

// person.foo(function() {
//     console.log(`Hi! My name is ${this.name}.`);
// });

// p.359

// const x = 1;

// function outerFunc() {
//     const x = 10;
//     innerFunc();
// }

// function innerFunc() {
//     console.log(x);
// }

// outerFunc();

// const x = 1;

// function foo() {
//     const x = 10;
//     bar();
// }

// function bar() {
//     console.log(x);
// }

// foo();
// bar();

// const x = 1;

// function outer() {
//     const x = 10;
//     const inner = function() {
//         console.log(x);
//     }
//     return inner();
// }

// const innerFunc = outer();
// innerFunc();


// const increase = (function() {
//     let num = 0;
//     return function() {
//         return ++num;
//     };
// }());

// console.log(increase());    
// // once 'num' is created, this num exists in global lexical environment. 
// // doesn't care about 'num' in the local(741) environment anyumore.

// console.log(increase());    
// // closure executed. increase() is ordered in global environment. 
// // thus, ++num executed in global environment.


// // closure counter function ex.
// const counter = (function() {
//     let num = 0;
//     return {
//         increase() {
//             return ++num;
//         },
//         decrease() {
//             return num > 0 ? --num : 0;
//         }
//     };
// }());

// console.log(counter.increase());
// console.log(counter.increase());

// console.log(counter.decrease());
// console.log(counter.decrease());


// // constructor function version of closure private function of above.
// const Counter = (function() {
//     let num = 0;
//     function Counter() {
//         // this.num = 0;
//     }

//     Counter.prototype.increase = function() {
//         return ++num;
//     };

//     Counter.prototype.decrease = function() {
//         return num > 0 ? --num : 0;
//     };

//     return Counter;
// }());

// const counter = new Counter();

// console.log(counter.increase());
// console.log(counter.increase());

// console.log(counter.decrease());
// console.log(counter.decrease());

// // increaser and decreaser funcs don't share their variable.
// function makeCounter(predicate) {
//     let counter = 0;

//     return function() {
//         counter = predicate(counter);
//         return counter;
//     };
// }

// function increase(n) {
//     return ++n;
// }

// function decrease(n) {
//     return --n;
// }

// const increaser = makeCounter(increase);
// console.log(increaser());
// console.log(increaser());

// const decreaser = makeCounter(decrease);
// console.log(decreaser());
// console.log(decreaser());


// const counter = (function() {
//     let counter = 0;

//     return function(predicate) {
//         counter = predicate(counter);
//         return counter;
//     };
// }());

// function increase(n) {
//     return ++n;
// }

// function decrease(n) {
//     return --n;
// }

// console.log(counter(increase));
// console.log(counter(increase));

// console.log(counter(decrease));
// console.log(counter(decrease));


// function Person(name, age) {
//     this.name = name;
//     let _age = age;     // locan variable. thus, can't reference from outside of Person.

//     this.sayHi = function() {
//         console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
//     };
// }

// const me = new Person('Lee', 20);
// me.sayHi();
// console.log(me.name);
// console.log(me._age);   // undefined

// const you = new Person('Kim', 30);
// you.sayHi();
// console.log(you.name);
// console.log(you._age);  // undefined


// const Person = (function() {
//     let _age = 0;

//     function Person(name, age) {
//         this.name = name;
//         _age = age;
//     }

//     Person.prototype.sayHi = function() {
//         console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
//     };

//     return Person;
// }());

// const me = new Person('Lee', 20);
// me.sayHi();
// console.log(me.name);
// console.log(me._age);

// const you = new Person('Kim', 30);
// you.sayHi();
// console.log(you.name);
// console.log(you._age);


// var funcs = [];

// for (var i = 0; i < 3; i++) {
//     funcs[i] = function() { return i; };
// }

// for (var j = 0; j < funcs.length; j++) {
//     console.log(funcs[j]());
// }


// var funcs = [];

// for(var i = 0; i < 3; i++) {
//     funcs[i] = (function (id) {
//         return function() {
//             return id;
//         };
//     }(i));
// }

// for (var j = 0; j < funcs.length; j++) {
//     console.log(funcs[j]());
// }


// p.417


// var Person = (function() {
//     function Person(name) {
//         this.name = name;
//     }

//     Person.prototype.sayHi = function() {
//         console.log(`Hi! My name is ` + this.name);
//     };
//     return Person;
// }());

// var me = new Person('Lee');
// me.sayHi();


// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         console.log(`Hi! My name is ${this.name}`);
//     }

//     static sayHello() {
//         console.log('Hello!');
//     }
// }

// const me = new Person('Lee');
// console.log(me.name);
// me.sayHi();
// Person.sayHello();


// class Person {
//   constructor() {
//     this.name = 'Lee';
//     this.address = 'Seoul';
//   }
// }

// const me = new Person();
// console.log(me);


// class Square {
//   static area(width, height) {
//     return width * height;
//   }
// }

// console.log(Square.area(10, 10));

// p.432


// const person = {
//   firstName: 'Jongrip',
//   lastName: 'Yoon',

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(' ');
//   }
// };

// console.log(`${person.firstName} ${person.lastName}`);
// person.fullName = 'Heegun Lee';
// console.log(person.fullName);
// console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));


// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(' ');
//   }
// }

// const me = new Person('Ungmo', 'Lee');
// console.log(`${me.firstName} ${me.lastName}`);
// me.fullName = 'Heegun Lee';
// console.log(me.fullName);


// class Person {
//   name = 'Lee';
// }

// const me = new Person();
// console.log(me);


// class Person {
//   #name = '';

//   constructor(name) {
//     this.#name = name;
//   }

//   getName = function() {
//     return this.#name;
//   }
// }

// const me = new Person('Lee');
// console.log(me.getName());


// class Person {
//   #name = '';

//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     return this.#name.trim();
//   }
// }

// const me = new Person('Lee');
// console.log(me.name);

// p.447


// class MyMath {
//   static PI = 22/7;
//   static #num = 10;
//   static increment() {
//     return ++MyMath.#num;
//   }
// }

// console.log(MyMath.PI);
// console.log(MyMath.increment());


// class Animal {
//   constructor(age, weight) {
//     this.age = age;
//     this.weight = weight;
//   }

//   eat() {
//     return 'eat';
//   }

//   move() {
//     return 'move';
//   }
// }

// class Bird extends Animal {
//   fly() {
//     return 'fly';
//   }
// }

// const bird = new Bird(1, 5);

// console.log(bird);
// console.log(bird instanceof Bird);
// console.log(bird instanceof Animal);

// console.log(bird.eat());
// console.log(bird.move());
// console.log(bird.fly());


// ?????? ????????? ??????. ???????????? ?????? ?????????.
// var Animal = (function() {
//   function Animal(age, weight) {
//     this.age = age;
//     this.weight = weight;
//   }

//   Animal.prototype.eat = function() {
//     return 'eat';
//   };

//   Animal.prototype.move = function() {
//     return 'move';
//   };

//   return Animal;
// }());

// var Bird = (function() {
//   function Bird() {
//     Animal.apply(this, arguments);
//   }

//   Bird.prototype = Object.create(Animal.prototype);
//   Bird.prototype.constructor = Bird;
//   Bird.prototype.fly = function() {
//     return 'fly';
//   };
//   return Bird;
// }());

// var bird = new Bird(1, 5);
// console.log(bird);
// console.log(bird.eat());
// console.log(bird.move());
// console.log(bird.fly());


// function Base(a) {
//   this.a = a;
// }

// class Derived extends Base {}

// const derived = new Derived(1);
// console.log(derived);


// function Base1() {}
// class Base2 {}

// let condition = true;

// class Derived extends (condition? Base1 : Base2) {}

// const derived = new Derived();
// console.log(derived);


// class Base {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
// }

// class Derived extends Base {
//   constructor(a, b, c) {
//     super(a, b);
//     this.c = c;
//   }
// }

// const derived = new Derived(1, 2, 3);
// console.log(derived);


// class Base {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     return `Hi! ${this.name}`;
//   }
// }

// class Derived extends Base {
//   sayHi() {
//     return `${super.sayHi()}. How are you doing?`;
//   }
// }

// const derived = new Derived('Lee');
// console.log(derived.sayHi());

// const base = {
//   name: 'Lee',
//   sayHi() {
//     return `Hi! ${this.name}`;
//   }
// };

// const derived = {
//   __proto__: base,
//   sayHi() {
//     return `${super.sayHi()}. How are you doing?`;
//   }
// };

// console.log(derived.sayHi());


// class Base {
//   static sayHi() {
//     return 'Hi!';
//   }
// }

// class Derived extends Base {
//   static sayHi() {
//     return `${super.sayHi()} How are you doing?`;
//   }
// }

// console.log(Derived.sayHi());


// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   toString() {
//     return `width = ${this.width}, height = ${this.height}`;
//   }
// }

// class ColorRectangle extends Rectangle {
//   constructor(width, height, color) {
//     super(width, height);
//     this.color = color;
//   }

//   toString() {
//     return super.toString() + `, color = ${this.color}`;
//   }
// }

// const colorRectangle = new ColorRectangle(2, 4, 'red');
// console.log(colorRectangle);
// console.log(colorRectangle.getArea());
// console.log(colorRectangle.toString());


// function foo(...rest) {
//   console.log(rest);
// }

// foo(1, 2, 3, 4, 5);


// const arr = [];

// console.time('Array Performance Test');

// for(let i = 0; i < 10000000; i++) {
//   arr[i] = i;
// }

// console.timeEnd('Array Performance Test');

// const obj = {};

// console.time('Object Performance Test');

// for(let i = 0; i < 10000000; i++) {
//   obj[i] = i;
// }

// console.timeEnd('Object Performance Test');


// p.578


// const target = 'Is this all there is?';
// const regexp = /is/i;
// regexp.test(target);


// const target = 'Is this all there is?';
// const regexp = new RegExp(/is/i);
// regexp.test(target);


// p.614


// const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

// isIterable([]);
// isIterable('');
// isIterable(new Map());
// isIterable(new Set());
// isIterable({});


// for(const item of [1, 2, 3]) {
//   console.log(item);
// }

// const iterable = [1, 2, 3];
// const iterator = iterable[Symbol.iterator]();

// for(;;) {
//   const res = iterator.next();
//   if(res.done) break;
//   const item = res.value;
//   console.log(item);
// }


// const arrayLike = {
//   0:1,
//   1:2,
//   2:3,
//   length:3
// };

// const arr = Array.from(arrayLike);
// console.log(arr);


// const fibonacci = {
//   [Symbol.iterator]() {
//     let [pre, cur] = [0, 1];
//     const max = 10;

//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];
//         return {value: cur, done: cur >= max};
//       }
//     };
//   }
// };

// for (const num of fibonacci) {
//   console.log(num);
// }


// p.636


// var arr = [1, 2, 3];

// var one   = arr[0];
// var two   = arr[1];
// var three = arr[2];

// console.log(one, two, three);

// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one, two, three);


// const todos = [
//   {id: 1, content: 'HTML', completed: true },
//   {id: 2, content: 'CSS', completed: false },
//   {id: 3, content: 'JS', completed: false }
// ];

// const [, {id}] = todos;
// console.log(id);


// const user = {
//   name: 'Lee',
//   address: {
//     zipCode: '03068',
//     city: 'Seoul'
//   }
// };

// const { address: {city}} = user;
// console.log(city);


// const set = new Set();
// console.log(set);


// const uniq = array => array.filter((v, i, self) => self.indexOf(v) === i);
// console.log(uniq([2, 1, 2, 3, 4, 3, 4]));

// const uniq = array => [...new Set(array)];
// console.log(uniq([2, 1, 2, 3, 4, 3, 4]));


// const map1 = new Map([['key1', 'value1'], ['key2', 'value2']]);
// console.log(map1);


// end up in p.660


// **** "Eloquent Javascript" ****
// From 19, Sept, 2021


// p.39

// const square = function(x) {
//   return x * x;
// };

// console.log(square(12));

// const makeNoise = function() {
//   console.log("Pling!");
// };

// makeNoise();

// const power = function(base, exponent) {
//   let result = 1;
//   for(let count = 0; count < exponent; count++) {
//     result *= base;
//   }
//   return result;
// };
// console.log(power(2, 10))

// let x = 10;
// if(true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z);
// }

// console.log(x + z);

console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}

// p.44