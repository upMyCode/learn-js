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


function Constr(age, year) {
    this.age = age;
    this.year = year;
}

var obj = new Constr(11, 1999);

console.log(obj.age);
