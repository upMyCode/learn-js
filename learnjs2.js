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

function count(num){
    console.log( num*this );
}

const dobl = count.bind(2);

console.log(dobl(6));