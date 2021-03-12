let numberOfFilms = 10;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

console.log(personalMovieDB);

let lastMovie = ['logan1', 'logan2'];
let movieMark = [5, 8];

for (let i = 0; i < lastMovie.length; i++) {
  personalMovieDB.movies[lastMovie[i]] = movieMark[i];
}

console.log(personalMovieDB);
