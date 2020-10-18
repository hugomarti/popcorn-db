import React from "react";
import { Heading, Box, Carousel } from "grommet";

export const Hero = ({ nowPlaying }) => (
  <Box height="40vh">
    <Carousel play={5000} fill>
      {nowPlaying
        .filter((m, idx) => idx < 4)
        .map((movie) => (
          <Box
            key={movie.id}
            pad="large"
            justify="end"
            align="center"
            height="40vh"
            background={`url(${movie.backPoster})`}
          >
            <Heading alignSelf="start" margin="0" color="white">
              {movie.title}
            </Heading>
          </Box>
        ))}
    </Carousel>
  </Box>
);
