import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList";
import HomeMenu from "../../components/HomeMenu";
import {
  ContentContainer,
  MainContainer,
  StaticContainer,
} from "../../components/Containers";
import { getMovies } from "../../data/mockRequests/requests";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(null);
  const [missingInApplication, setMissingInApplication] = useState(false);

  const filterMovieList = () => {
    const movies = getMovies();
    if (searchValue) {
      const filteredData = movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setData(filteredData);
      setMissingInApplication(!filteredData.length);
    } else {
      setData(movies);
    }
  };

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    filterMovieList();
  }, [searchValue]);

  const updateMoviesData = () => {
    const movies = getMovies();
    setData(movies);
  };

  return (
    <MainContainer
      style={{ height: "100%", marginLeft: "2rem", marginRight: "2rem" }}
    >
      <StaticContainer>
        <HomeMenu
          searchValue={searchValue}
          changeSearchValue={changeSearchValue}
          updateMoviesData={updateMoviesData}
        />
      </StaticContainer>
      <ContentContainer>
        <MovieList
          data={data}
          missingInApplication={missingInApplication}
          updateMoviesData={updateMoviesData}
        />
      </ContentContainer>
    </MainContainer>
  );
};
