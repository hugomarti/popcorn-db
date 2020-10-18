import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
} from "../services/index";

import { Hero } from "./Hero";
import { CarouselPreview } from "./CarouselPreview";
import { SearchResults } from "./SearchResults";
import { DropdownGenres } from "./DropdownGenres";

export const HomePage = ({ searchResult, onReset }) => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const handleGenreSelect = async (genreId) => {
    setMovieByGenre(await fetchMovieByGenre(genreId));
  };

  useEffect(() => {
    const fetchApi = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre());
      setPersons(await fetchPersons());
      setTopRatedMovies(await fetchTopratedMovie());
    };

    fetchApi();
  }, []);

  return (
    <Box pad={{ top: "7vh" }}>
      <Hero nowPlaying={nowPlaying} />
      <Box width="80vw" margin="auto">
        {searchResult.results ? (
          <SearchResults searchResult={searchResult} onReset={onReset} />
        ) : (
          <Box>
            <CarouselPreview heading="Trending Now" movies={movieByGenre}>
              <DropdownGenres genres={genres} onSelect={handleGenreSelect} />
            </CarouselPreview>
            <CarouselPreview heading="Polular Figures" persons={persons} />
            <CarouselPreview
              heading="Top Rated Movies"
              movies={topRatedMovies}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
