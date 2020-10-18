import React from "react";
import { Box, Layer, Text } from "grommet";
import ReactPlayer from "react-player";

export const ModalVideo = ({ onClose, data, openModal, video }) => {
  const youtubeUrl = "https://www.youtube.com/watch?v=";
  return (
    <Box>
      {openModal && (
        <Layer onEsc={onClose} onClickOutside={onClose}>
          <Box background="dark-1" pad="1rem">
            <Text weight={500}>{data.title}</Text>
          </Box>
          <ReactPlayer url={youtubeUrl + video.key} />
        </Layer>
      )}
    </Box>
  );
};
