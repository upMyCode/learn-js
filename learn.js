// ****************lesson__1**************

const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?','');

const personalMovieDB = {
    count : numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const question = prompt(' Что вы смотрели в последний раз?', ''),
      question2 = prompt('На сколько вы его оцените?', ''),
      question3 = prompt(' Что вы смотрели в последний раз?', ''),
      question4 = prompt('На сколько вы его оцените?', '');
      
personalMovieDB.movie[question] = question2;
personalMovieDB.movie[question3] = question4;

console.log(personalMovieDB);