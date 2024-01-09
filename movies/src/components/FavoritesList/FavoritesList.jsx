import { useEffect, useState } from "react";
import { getFavorites } from "../../data/mockRequests/requests";
import MovieCard from "../MovieCard";
import { ContentContainer } from "../Containers";

export const FavoritesList = ({ filterValue }) => {
  const [data, setData] = useState(null);

  const filterFavoritesList = () => {
    const favorites = getFavorites();
    if (filterValue) {
      setData(
        favorites.filter((movie) =>
          movie.name.toLowerCase().includes(filterValue.toLowerCase())
        )
      );
    } else {
      setData(favorites);
    }
  };

  useEffect(() => {
    filterFavoritesList();
  }, [filterValue]);

  const updateMoviesData = () => {
    const favorites = getFavorites();
    setData(favorites);
  };

  useEffect(() => {
    const favorites = getFavorites();
    setData(favorites);
  }, []);

  return data ? (
    <ContentContainer style={{ margin: "2rem" }}>
      <div className="row row-cols-1 row-cols-md-4 g-4 w-100">
        {data.map((movie) => (
          <div key={movie.id} className="col">
            <MovieCard
              movie={{ ...movie, favorite: true }}
              updateMoviesData={updateMoviesData}
              deletable={false}
            />
          </div>
        ))}
      </div>
    </ContentContainer>
  ) : (
    <div>No movies yet</div>
  );
};
