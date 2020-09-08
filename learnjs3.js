'use strict'

// const uq = new Promise(function(resolve, reject) {

//     console.log('подготовка данных.....');

//     setTimeout(() => {
//         console.log('Ожидается отправка данных....');

//         const product = {
//             name : 'TV',
//             price : 1000
//         };

//         resolve(product)
//     }, 2000)
// });

// uq.then((product) => {
//     setTimeout(() => {
//         product.secondName = 'PlayStation';
//         console.log(product);
//     },2000)
// })


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

test(1000).then(() => console.log('Load success...'))
