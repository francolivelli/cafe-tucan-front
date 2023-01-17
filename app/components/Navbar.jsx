import { Box, Grid, GridItem, Icon } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdSettings } from 'react-icons/md'

const Navbar = () => {
  return (
    <Box
      h={{ xs: "20vw", sm: "16vw", md: "12vw", lg: "7vw", xl: "4vw" }}
      w="100vp"
      borderBottomWidth="1px"
      borderBottomColor="white"
      backgroundColor="black">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        height="100%"
        width="100%"
        display="flex"
        justifyContent="space-between">
        <GridItem
          colStart={1}
          width={{ xs: "20vw", sm: "16vw", md: "12vw", lg: "7vw", xl: "4vw" }}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Icon as={MdSettings}
            color="white"
            padding="2px"
            boxSize={8}></Icon>
        </GridItem>
        <GridItem colStart={2} display="flex" height="100%" padding={2}>
          <img src="logo_black.jpeg" />
        </GridItem>
        <GridItem
          colStart={3}
          width={{ xs: "20vw", sm: "16vw", md: "12vw", lg: "7vw", xl: "4vw" }}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <HamburgerIcon
            color="white"
            padding="2px"
            boxSize={8}></HamburgerIcon>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Navbar;
