import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));


const theme = extendTheme({
  colors: {
    brand: {
      primary1:   "#495E57",
      primary2:   "#F4CE14",
      secondary1: "#EE9972",
      secondary2: "#FBDABB",
    },
    white:      "#EDEFEE",
    black:      "#333333",
  },
  fonts: {
    heading: "Markazi Text",
    body: "Karla"
  },
})

root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals