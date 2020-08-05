// ****************lesson__1**************

 let numberOfFilms;

const personalMovieDB = {
    count : numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms (){
    for(let i = 0 ; i<2; i++){
        const question = prompt('Что вы смотрели в последний раз?', ''),
              question2 = prompt('На сколько вы его оцените?', '');
    
        if (question != null && question2 != null && question != '' && question2 != '' && question.length < 50){
            personalMovieDB.movie[question] = question2;
            console.log('done');
        }
        else {
            console.log('error');
            i--;
        }
}

}
    rememberMyFilms();


    function showMyDB(){
        let privat = personalMovieDB.privat;
        
        if(privat == false ){
            console.log(personalMovieDB);
        }
        else {
            console.log( privat );
        }
    }

    showMyDB();

     function writeYourGenrews() {
         for(i = i ; i < 10; i++){
            const question3 = prompt(`Ваш любимый жанр под номером ${i}',''`);
            personalMovieDB.genres[i-1] = question3;
         }
     }

     writeYourGenrews();

     for(i = 0; i < 3; ++i){
         console.log(i);
     }

//      function detectPersonalLevel(){
//         if(personalMovieDB.count < 10){
//             console.log('Мало фильмов');
//         }
//         else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Среднее количество');
//         }
//         else if( personalMovieDB.count >= 30) {
//             console.log('Да вы круто чел');
//         }
//         else{
//             console.log('Error');
//         }
//     }
    
//     detectPersonalLevel();

    


// function start() {
    

//      while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы просмотрели?','');
//      }
// }





// // (a > 0) ? console.log('true') : console.log('false');

// let a = 10;

// switch(a){
//     case 49:
//         console.log('No');
//         break;
//     default:
//         console.log('Что за  число такое?');
//         break;
// }

// let num = 100;

// while (num <= 120){
//     console.log('Привет');
//     num++;
// }

// do {
//     console.log('Привет');
//     num++;
// }
// while (num <= 120);


// let item = 'miniItem';
// console.log(item.indexOf('Item'));

// console.log(item.slice(4, 8));

// console.log(item.substring(4, 8));

// console.log(item.substr(4, 5));

// console.log(parseInt('13.6px'));

// console.log(parseFloat('13.4px'));


function property(element , callback ) {
    console.log(`My first ${element}`);
    callback();
}

property('callback' , function (){
    console.log(`Thats's true`);
});


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors:{
        border: 'black',
        background:'red'
    },
    makeTest: function(){
        console.log('This is my metod')
    }
};

options.makeTest();

console.log(Object.keys(options).length);

delete options.name;

console.log(options['name'])

console.log(options);

for (let key in options){
    console.log(key);
} 