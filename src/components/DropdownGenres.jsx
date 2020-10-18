import React from "react";

import { Box, Menu } from "grommet";

export const DropdownGenres = ({ genres, onSelect }) => {
  return (
    <Box align="center" pad="large">
      <Menu
        color="white"
        dropProps={{ align: { top: "bottom", left: "left" } }}
        label="Genres"
        items={genres.map((genre) => ({
          label: genre.name,
          onClick: () => onSelect(genre.id),
        }))}
      />
    </Box>
  );
};
