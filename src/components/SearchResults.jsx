import React from "react";
import { Box, Heading, Image, Text } from "grommet";
import { LinkPrevious } from "grommet-icons";
import { useHistory } from "react-router-dom";
import ReactStars from "react-stars";

export const SearchResults = ({ searchResult, onReset }) => {
  const history = useHistory();
  return (
    <Box>
      <Box direction="row" align="center">
        <Box
          margin={{ right: "1rem" }}
          style={{ cursor: "pointer" }}
          onClick={onReset}
        >
          <LinkPrevious color="white" />
        </Box>
        <Heading level={2} color="white">
          Search results
        </Heading>
      </Box>

      <Box
        background="rgba(255, 137, 6, 0.5)"
        pad="small"
        round="small"
        direction="row"
        wrap
        justify="center"
        align="center"
      >
        {searchResult.results.map((movie) => (
          <Box key={movie.id} height="medium" width="small" margin="medium">
            <Box
              height="80%"
              style={{ cursor: "pointer" }}
              onClick={() => history.push(`movie/${movie.id}`)}
            >
              <Image
                fit="cover"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                fallback="https://i.ibb.co/Cvb0PN5/pexels-pixabay-33129.jpg"
              />
            </Box>
            <Box margin={{ top: "0.5rem" }} height="25%" justify="between">
              <Text weight={500} color="white">
                {movie.title}
              </Text>
              <Text weight={300} size="xsmall" color="white">
                Rating: {movie.vote_average}
              </Text>
              <ReactStars count={movie.rating} color1={"#ffd700"} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
