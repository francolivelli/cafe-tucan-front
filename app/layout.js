"use client"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import theme from '../styles/theme';

const RootLayout = ({ children }) => {
  return (
    <html>
      <head></head>
      <body>
        <ChakraProvider theme={theme}>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
