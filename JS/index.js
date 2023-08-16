"use strict";
  
const numberOfFilms =  +prompt('Wie viel Films','');

const personalMovieDB= {
    count:  numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false,
};
const   a = prompt ('Letzter Film',''),
        b = prompt ('Schätzung',''),
        c = prompt ('Letzter Film',''),
        d = prompt ('Schätzung','');
personalMovieDB.movies[a]=b;
personalMovieDB.movies[b]=d;
console.log(personalMovieDB);
