import MovieCard from "../MovieCard";
import Message from "../Message";

export const MovieList = ({ data, missingInApplication, updateMoviesData }) => {
  return data && !missingInApplication ? (
    <div className="row row-cols-1 row-cols-md-4 g-4 w-100 mb-4">
      {data.map((movie) => (
        <div key={movie.id} className="col">
          <MovieCard movie={movie} updateMoviesData={updateMoviesData} />
        </div>
      ))}
    </div>
  ) : (
    <Message type={missingInApplication ? "missing" : "empty"} />
  );
};
