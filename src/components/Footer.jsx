import React from "react";
import { Heading, ResponsiveContext } from "grommet";
import { useHistory } from "react-router-dom";

import { Ticket, FacebookOption, Instagram, Twitter } from "grommet-icons";

import { Anchor, Box, Footer, Text } from "grommet";

const Media = () => (
  <Box direction="row" gap="xxsmall" justify="center">
    <Anchor
      a11yTitle="Share feedback on Github"
      href="https://www.instagram.com/"
      icon={<Instagram color="brand" />}
    />
    <Anchor
      a11yTitle="Chat with us on Slack"
      href="https://www.facebook.com/"
      icon={<FacebookOption color="brand" />}
    />
    <Anchor
      a11yTitle="Follow us on Twitter"
      href="https://twitter.com/"
      icon={<Twitter color="brand" />}
    />
  </Box>
);

export const FooterApp = () => {
  const history = useHistory();
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Footer margin={{ top: "3rem" }} background="#0f0e17" pad="medium">
          <Box
            direction={size === "small" ? "column" : "row"}
            justify="between"
            align="center"
            width="100%"
            margin="auto"
          >
            <Box
              direction="row"
              align="center"
              onClick={() => history.push("/")}
            >
              <Ticket color="accent-1" />
              <Heading color="white" level={3} margin={{ left: "0.5rem" }}>
                Popcorn DB
              </Heading>
            </Box>
            <Media />
            <Text color="white" textAlign="center" size="xsmall">
              ©Copyright
            </Text>
          </Box>
        </Footer>
      )}
    </ResponsiveContext.Consumer>
  );
};
