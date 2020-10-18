import React from "react";
import { Box, Heading } from "grommet";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { CarouselMovieItem } from "./CarouselMovieItem";
import { CarouselFiguresItem } from "./CarouselFiguresItem";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1024, min: 772 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 772, min: 524 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 524, min: 0 },
    items: 1,
  },
};

export const CarouselPreview = ({ movies, heading, children, persons }) => {
  return (
    <Box>
      <Box direction="row" justify="between" align="center">
        <Heading level={2} color="white">
          {heading}
        </Heading>
        {children && children}
      </Box>
      <Box
        pad="small"
        width="100%"
        background="rgba(255, 137, 6, 0.5)"
        round="small"
        justify="center"
      >
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // deviceType={this.props.deviceType}
          itemClass="carousel-item-padding-40-px"
          arrows
        >
          {movies &&
            movies.map((movie) => (
              <CarouselMovieItem key={movie.id} movie={movie} />
            ))}
          {persons &&
            persons.map((person) => (
              <CarouselFiguresItem key={person.id} person={person} />
            ))}
        </Carousel>
      </Box>
    </Box>
  );
};
