'use strict';

let numberOfFilms = prompt('How many movies have you seen');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
//My variant
// let movie = [];
// let mark = [];
// for (let i = 0; i < 2; i++){
//     while (!movie[i] || movie[i].length > 50 || movie[i] == null){
//         movie[i] = prompt('Name of the movie');
//     }
//     mark[i] = prompt('Rate this movie');
//     personalMovieDB.movies[movie[i]] = mark[i];
// }

// if (personalMovieDB.count < 10){
//     console.log('You\'ve seen not much movies');
// } else if (personalMovieDB.count <=30) {
//     console.log('Youre classical movie watcher');
// } else {console.log('Movie fan');}

// console.log(personalMovieDB);
//Another solution
for (let i = 0; i < 2; i++) {
  const a = prompt('One of the last movies?', ''),
    b = prompt('Rate this movie?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Not much movies');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Classical movie watcher');
} else if (personalMovieDB.count >=30) {
    console.log('Movie fan');
} else {console.log('Error');}
