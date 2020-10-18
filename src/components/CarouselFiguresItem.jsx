import React from "react";
import { Box, Image, Text } from "grommet";

export const CarouselFiguresItem = ({ person }) => {
  return (
    <Box key={person.id} height="medium" width="small" margin="small">
      <Box>
        <Image
          fit="cover"
          src={person.profileImg}
          fallback="https://i.ibb.co/mJS7Sb7/pexels-pixabay-33129.jpg"
        />
      </Box>
      <Text weight={500} margin={{ top: "1rem" }} color="white" size="medium">
        {person.name}
      </Text>
      {person.know && (
        <Text size="small" color="light-6" weight={200}>
          Known for {person.known}
        </Text>
      )}
    </Box>
  );
};
