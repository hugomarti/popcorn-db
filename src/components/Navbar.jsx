import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Header, Box, TextInput, Form, Heading } from "grommet";
import { Search, Ticket } from "grommet-icons";

export const Navbar = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    onSearch(input);
    setInput("");
  };

  return (
    <Header
      style={{ position: "fixed", top: 0, zIndex: "2" }}
      width="100%"
      background="#0f0e17"
      pad="medium"
      height="7vh"
      elevation="medium"
      justify="between"
      align="center"
      margin="auto"
    >
      <Box
        width="50%"
        direction="row"
        align="center"
        onClick={() => history.push("/")}
      >
        <Ticket color="accent-1" />
        <Heading level={3} margin={{ left: "0.5rem" }}>
          Popcorn DB
        </Heading>
      </Box>
      <Box width="50%" direction="row" align="center" justify="end">
        <Box margin={{ right: "1rem" }}>
          <Search />
        </Box>
        <Form onSubmit={handleSubmit}>
          <TextInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a Movie..."
            size="small"
          />
        </Form>
      </Box>
    </Header>
  );
};
