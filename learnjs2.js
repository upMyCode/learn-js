'use strict'

// function getThis(a, b){
//     console.log(this);
//         function abc(){
//             console.log(this)
//             return a + b;
//         }
//         console.log(abc())
// }

// getThis(5, 4);


// const obj = {
//     a : 20,
//     b : 30,
//     sum: function(){
//             function sum(){
//                 console.log(this);
//             }
//             sum();
//     }
// }

// obj.sum();

// function Constr(name, age){
//     this.age = age;
//     this.name = name;
// }

// let a = new Constr('Johan', 31);

// console.log(a.age);
// console.log(Constr);


// function test(pc){
//     console.log(this.name + pc);
// }

// const obj = {
//     name : 'Johan'
// };

// // test.call(obj);
// test.apply(obj, ['Max']);

// test();
// var a = 10;
// var c = 11; 

// while(a < 16){
//     a = a+1;
//     c = c+1;
// }

// console.log(a, c);

// function count(num){
//     console.log( num*this );
// }

// const dobl = count.bind(2);

// console.log(dobl(6));


// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width  = width;
//     }

//     calcArea(){
//         return this.height * this.width;
//     }
    
// }

// const square = new Rectangle(10, 10);

// console.log(square.calcArea());



// class ColoredRectangle extends Rectangle {
//     constructor(height, width, text, bgColor){
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps(){
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const col = new ColoredRectangle(34, 10, "text",'dark');

// col.showMyProps();


// function Constr(age, year) {
//     this.age = age;
//     this.year = year;
//     this.hello = function(){
//         console.log(this.year);
//     }
// }

// var obj = new Constr(11, 1999);

// console.log(obj.age);
// obj.hello()



// const testArr = [ 'abc', 'cde'];
// console.log(testArr.some(test => test == 'abc'));


// const arr = [4, 4, 4, 4];
// var c = arr.reduce((acc, value) => acc + value);
// console.log(c);

// console.log(arr.every(test => test == 4));

// const arr2 = [ 4, 5, 6, 7, [9] ];
// console.log(arr2.includes(7));
// console.log(arr2.flatMap((x) => x*x));
// console.log(arr2);

// console.log(arr2.flat());
// const search = [ {age: 1, name: 12},
//                  {age: 2, name: 12},
//                  {age: 3, name: 1},           
// ]

// console.log(search.filter(element => element.name == 12 ));

// console.log(search.findIndex(elem => elem.age == 3));
// console.log(search.find(elem => elem.age == 3));
// console.log(search.concat(arr2));


//Методы объектов 
// const testObj = {
//     dollars : 1200,
//     cashInCreditCard : 200
// }

// // const testObj2 = {}

// // const newObj = Object.assign(testObj, testObj2);

// const newObj = Object.create(testObj);

// console.log(newObjdollars);

// const obj = {
//     time : 12.30,
//     year: 2017
// }

// const obj2 = {}

// Object.setPrototypeOf(obj2, obj);

// console.log(obj2.time)

// console.log(Object.keys(obj))


//Promises


let promi = new Promise((resolve, reject) => {
    throw new Error('%%%');
})

promi.catch(alert);