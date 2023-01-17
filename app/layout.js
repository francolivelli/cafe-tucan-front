"use client"
import "../styles/globals.css"
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import theme from '../styles/theme';

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>
        <title>Café Tucán</title>
      </head>
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
