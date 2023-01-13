import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box
      h={{ sm: "18vw", md: "10vw", lg: "5vw" }}
      w="100vp"
      bg="black"
      color="white">
      <Grid
        h="100%"
        w="100%"
        bg="red"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)">
        <GridItem
          rowStart="1"
          rowEnd="1"
          bg="blue"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <img src="logo_navbar_black.jpeg" id="logo"/>
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip" />
      </Grid>
    </Box>
  );
};

export default Navbar;
