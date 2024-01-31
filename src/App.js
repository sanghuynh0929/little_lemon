import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage"
import { Routes, Route } from "react-router-dom";
import ReservationsPage from "./pages/ReservationPage"
import NotFoundPage from "./pages/NotFoundPage";
import { AlertProvider } from "./contexts/alertContext";

import {ChakraProvider, extendTheme} from '@chakra-ui/react'


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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/#about" />
            <Route path="/reservations" element={<ReservationsPage/>} />
            <Route path="/menu" element={<NotFoundPage />} />
            <Route path="/onlineorder" element={<NotFoundPage />} />
            <Route path="/login" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
