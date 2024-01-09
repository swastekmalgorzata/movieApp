import { favoriteList } from "../favorites/favorites";
import { movieList } from "../movieList";

let movies = movieList;
let favorites = favoriteList;

export const getMovies = () => movies;
export const getFavorites = () => favorites;

const getMovieById = (movieId) => movies.find(({ id }) => id === movieId);

export const addMovieToFavorites = (movieId) => {
  const movie = getMovieById(movieId);
  const { favorite, ...data } = movie;
  favorites = [...favorites, data];
  movies = movies.map((movie) =>
    movie.id === movieId ? { ...movie, favorite: true } : movie
  );
};

export const removeMovieFromFavorites = (movieId) => {
  favorites = favorites.filter(({ id }) => id !== movieId);
  movies = movies.map((movie) => {
    return movie.id === movieId ? { ...movie, favorite: false } : movie;
  });
};

export const changeMovieRating = (movieId, newRating) => {
  movies = movies.map((movie) => {
    return movie.id === movieId ? { ...movie, rating: newRating } : movie;
  });
};

export const addMovie = (movie) => {
  movies = [{ id: movies.length + 1, ...movie }, ...movies];
};

export const removeMovie = (movieId) => {
  movies = movies.filter(({ id }) => id !== movieId);
};
