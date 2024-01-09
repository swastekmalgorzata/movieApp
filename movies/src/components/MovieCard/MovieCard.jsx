import { MovieBody } from "./MovieCardContent/MovieBody";
import "./MovieCard.css";
import { MovieCardFooter } from "./MovieCardContent/MovieCardFooter";
import { MovieImage } from "./MovieCardContent/MovieImage";

export const MovieCard = ({ movie, updateMoviesData, deletable }) => {
  return (
    <div className="card h-100">
      <MovieImage photoUrl={movie.photoUrl} name={movie.name} />
      <MovieBody name={movie.name} directors={movie.directors} />
      <MovieCardFooter
        rating={movie.rating}
        movieId={movie.id}
        favorite={movie.favorite}
        updateMoviesData={updateMoviesData}
        deletable={deletable}
      />
    </div>
  );
};
