import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

const Header = () => {

  const headerRef = useRef(null);


  useEffect(() => {
    let prevYPos = window.scrollY;
    const handleScroll = () => {
      const currYPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevYPos > currYPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevYPos = currYPos;
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="white"
      ref={headerRef}
    >
      <Box
          px="13vw"
          py={4}>
        <HStack
          justifyContent="space-between"
          alignItems="center"
        >
          <Container as="header">
            <img src={logo} />
          </Container>
          <Container as="nav">
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <Link href="/home" onClick={handleClick("hero")}>Home</Link>
              <Link href="/about" onClick={handleClick("about")}>About</Link>
              <a href="/menu">Menu</a>
              <a href="/reservations" onClick={handleClick("reservations")}>Reservations</a>
              <a href="/orderonline" >Order Online</a>
              <a href="/login">Login</a>
            </HStack>
          </Container>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
