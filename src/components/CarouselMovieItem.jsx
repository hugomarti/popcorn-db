import React from "react";
import { Box, Image, Text } from "grommet";
import ReactStars from "react-stars";
import { useHistory } from "react-router-dom";

export const CarouselMovieItem = ({ movie }) => {
  const history = useHistory();
  return (
    <Box key={movie.id} height="medium" width="small" margin="medium">
      <Box
        height="80%"
        style={{ cursor: "pointer" }}
        onClick={() => history.push(`movie/${movie.id}`)}
      >
        <Image
          fit="cover"
          src={movie.poster}
          fallback="https://i.ibb.co/Cvb0PN5/pexels-pixabay-33129.jpg"
        />
      </Box>
      <Box margin={{ top: "0.5rem" }} height="25%" justify="between">
        <Text weight={500} color="white">
          {movie.title}
        </Text>
        <Text weight={300} size="xsmall" color="white">
          Rating: {movie.rating}
        </Text>
        <ReactStars count={movie.rating} color1={"#ffd700"} />
      </Box>
    </Box>
  );
};
