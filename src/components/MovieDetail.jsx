import React, { useEffect, useState } from "react";
import {
  Heading,
  Box,
  Image,
  Carousel,
  Text,
  Paragraph,
  ResponsiveContext,
} from "grommet";
import {
  fetchCasts,
  fetchMovieDetail,
  fetchMovieVideos,
  fetchSimilarMovie,
} from "../services/index";
import { CirclePlay } from "grommet-icons";
import { ModalVideo } from "./ModalVideo";
import { LinkPrevious } from "grommet-icons";
import { useHistory } from "react-router-dom";
import ReactStars from "react-stars";
import { CarouselPreview } from "./CarouselPreview";

export const MovieDetail = ({ match }) => {
  const [movieDetail, setMovieDetail] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [video, setVideo] = useState([]);
  const [casts, setCasts] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const history = useHistory();
  let params = match.params;
  const {
    backdrop_path,
    title,
    vote_average,
    tagline,
    overview,
    poster_path,
    release_date,
    runtime,
  } = movieDetail;

  useEffect(() => {
    const fetchApi = async () => {
      setMovieDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      setCasts(await fetchCasts(params.id));
      setSimilarMovies(await fetchSimilarMovie(params.id));
    };

    fetchApi();
  }, [params.id]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box pad={{ top: "7vh" }}>
          <Carousel
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              pad="large"
              justify="end"
              align="center"
              height="30vh"
              background={`url(http://image.tmdb.org/t/p/original/${backdrop_path})`}
              style={{ position: "relative" }}
            >
              <CirclePlay
                style={{
                  zIndex: "1",
                  cursor: "pointer",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                color="white"
                size="xlarge"
                onClick={() => setOpenModal(!openModal)}
              />
            </Box>
          </Carousel>
          <Box pad={{ horizontal: "large" }}>
            <Box direction="row" align="center">
              <Box
                margin={{ right: "1rem" }}
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/")}
              >
                <LinkPrevious color="white" size="medium" />
              </Box>
              <Heading level={2} color="white">
                Back
              </Heading>
            </Box>
            <Box
              direction={size === "small" ? "column" : "row"}
              justify="start"
              align="center"
            >
              <Box height="medium" width="300px" margin={{ right: "medium" }}>
                <Image
                  fit="cover"
                  src={`http://image.tmdb.org/t/p/original/${poster_path}`}
                />
              </Box>
              <Box align={size === "small" ? "center" : "start"}>
                <Heading margin="0" color="white" level={2}>
                  {title}
                </Heading>
                <Text margin={{ vertical: "0.5rem" }} color="white">
                  {tagline}
                </Text>
                <Text size="small" margin={{ bottom: "0.5rem" }} color="white">
                  Release Date: <br />
                  {release_date}
                </Text>
                <Text size="small" margin={{ bottom: "0.5rem" }} color="white">
                  Duration: {runtime}min
                </Text>
                <Text size="small" color="white">
                  Rating: {vote_average}
                </Text>
                <ReactStars count={vote_average} color1={"#ffd700"} />
                <Paragraph size="small" color="white">
                  {overview}
                </Paragraph>
              </Box>
            </Box>
            <br />
            {similarMovies && (
              <CarouselPreview
                heading="Similar Movies"
                movies={similarMovies}
              />
            )}

            <br />
            {casts && (
              <CarouselPreview heading="Casts" persons={casts.slice(0, 10)} />
            )}
          </Box>
          <ModalVideo
            data={movieDetail}
            onClose={handleCloseModal}
            openModal={openModal}
            video={video}
          />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};
