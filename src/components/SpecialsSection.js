import React from "react";
import { Avatar, Heading, VStack, HStack, Image, Text, Box, Button, Container, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { NavLink } from "react-router-dom";
import FoodCard from "./FoodCard";

const menus  =[
    {
        itemName: "Greek Salad",
        itemDesc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with garlic and rosemary croutons.",
        itemPrice: "$12.99",
        getImageSrc: () => require("../assets/GreekSalad.jpg")
    },
    {
        itemName: "Bruchetta",
        itemDesc: "Our Bruschetta is made from grilled sourdough bread that has been smeared with garlic and seasoned with salt and olive oil.",
        itemPrice: "$5.99",
        getImageSrc: () => require("../assets/Bruchetta.jpg")
    },
    {
        itemName: "Lemon Dessert",
        itemDesc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        itemPrice: "$5.00",
        getImageSrc: () => require("../assets/LemonDessert.jpg")
    },
];



const SpecialsSection = () => (
  <FullScreenSection
    id="specials-section"
    justifyContent="center"
    alignItems="center"
    isDarkBackground={false}
    backgroundColor="white"
    my={10}>
    <Box spacing={40} >
        <HStack justifyContent="space-between" align="center" spacing="30vw">
            <Heading as="h1">Specials</Heading>
            <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            >
            <Button bg="brand.primary2" borderRadius={16} className="menu-button"
                height={10} width={180}>Online Menu</Button>
            </NavLink>
        </HStack>
        <HStack>
            <Box marginTop={10}
            display="flex" gap={10}
            >
                {menus.map((item) => (
                    <FoodCard
                    itemName={item.itemName}
                    itemDesc={item.itemDesc}
                    imgSrc={item.getImageSrc()}
                    itemPrice={item.itemPrice}
                    />
                ))}
            </Box>
        </HStack>
    </Box>
  </FullScreenSection>
);

export default SpecialsSection;