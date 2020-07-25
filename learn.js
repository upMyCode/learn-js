// ****************lesson__1**************

const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?','');

const personalMovieDB = {
    count : numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

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

    if(personalMovieDB.count < 10){
        console.log('Мало фильмов');
    }
    else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Среднее количество');
    }
    else if( personalMovieDB.count >= 30) {
        console.log('Да вы круто чел');
    }
    else{
        console.log('Error');
    }
}

console.log(personalMovieDB);

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


let item = 'miniItem';
console.log(item.indexOf('Item'));

console.log(item.slice(4, 8));

console.log(item.substring(4, 8));

console.log(item.substr(4, 5));

console.log(parseInt('13.6px'));

console.log(parseInt('13.4px'));