'use strict';

let numberOfFilms = prompt('How many movies have you seen');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let movie = [];
let mark = [];
for (let i = 0; i < 2; i++){
    while (!movie[i] || movie[i].length > 50){
        movie[i] = prompt('Name of the movie');
    }
    mark[i] = prompt('Rate this movie');
    personalMovieDB.movies[movie[i]] = mark[i];
}

if (personalMovieDB.count < 10){
    console.log('You\'ve seen not much movies');
} else if (personalMovieDB.count <=30) {
    console.log('Youre classical movie watcher');
} else {console.log('Movie fan');}

console.log(personalMovieDB);
