import {
  addMovieToFavorites,
  changeMovieRating,
  removeMovie,
  removeMovieFromFavorites,
} from "../../../data/mockRequests/requests";
import { renderStars } from "../../utils";

export const MovieCardFooter = ({
  rating,
  movieId,
  favorite,
  updateMoviesData,
  deletable = true,
}) => {
  const ratingStarClick = (newRating) => {
    if (newRating === rating) {
      changeMovieRating(movieId, 0);
    } else {
      changeMovieRating(movieId, newRating);
    }
    updateMoviesData();
  };

  const removeMovieClick = () => {
    removeMovie(movieId);
    updateMoviesData();
  };

  const favoriteClick = () => {
    if (favorite) {
      removeMovieFromFavorites(movieId);
    } else {
      addMovieToFavorites(movieId);
    }
    updateMoviesData();
  };

  return (
    <div className="card-footer">
      <div className="d-flex justify-content-between align-items-center gap-2 flex-wrap">
        <div className="d-flex align-items-center">
          <span className="card-text mr-3">
            {renderStars(rating, ratingStarClick)}
          </span>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn favorite" onClick={favoriteClick}>
            <i
              className="bi bi-heart-fill"
              style={{ color: favorite ? "red" : "white" }}
            ></i>
          </button>
          {deletable && (
            <button className="btn border-0" onClick={removeMovieClick}>
              <i className="bi bi-trash remove"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
