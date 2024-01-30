import React from "react";
import { Avatar, Heading, VStack, HStack, Image, Text, Box, Button } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import heroImage from "../assets/RestaurantFood.jpg";
import { NavLink } from "react-router-dom";


const title = "Little Lemon";
const subtitle = "Chicago"
const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.";


const HeroSection = () => (
  <FullScreenSection
    id="hero-section"
    justifyContent="center"
    alignItems="center"
    isDarkBackground={true}
    backgroundColor="brand.primary1"
    maxHeight="60vh">
    <HStack>
      <VStack align="left" justifyContent="flex-start">
        <Box maxW='40vw'>
          <Heading as="h1" color="brand.primary2" noOfLines={1}>{title}</Heading>
          <Heading as="h2" noOfLines={1}>{subtitle}</Heading>
          <Text fontSize={20} fontWeight="bold" noOfLines={5}>{description}</Text>
        </Box>
        <NavLink
          to="/reservations"
          className={({ isActive }) => (isActive ? "active-link" : "")}>
          <Button bg="brand.primary2" borderRadius={16} className="reserve-button"
          height={10} width={180}>
            Reserve a Table
          </Button>
        </NavLink>
      </VStack>
      <Image src={heroImage} boxSize="md" borderRadius="20px" objectFit='cover'/>
    </HStack>
  </FullScreenSection>
);

export default HeroSection;