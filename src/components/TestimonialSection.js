import React from "react";
import { Avatar, Heading, VStack, HStack, Image, Text, Box, Button, Container, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import TestimonialCard from "./TestimonialCard";
import { NavLink } from "react-router-dom";
const testimonials = [
    {
        name: "Emily S.",
        comment: "The food at Little Lemon's was absolutely delicious, and I loved every bite!",
        rating: "5 stars",
        getImageSrc: () => require("../assets/emily_s.jpg")
    },
    {
        name: "Jack R.",
        comment: "Little Lemon's offers a wonderful atmosphere where I enjoyed some of the tastiest dishes I've ever had!",
        rating: "4 stars",
        getImageSrc: () => require("../assets/jack_r.jpg")
    },
    {
        name: "Sophie M.",
        comment: "I can confidently say that Little Lemon's is the best restaurant in town; their food is simply outstanding!",
        rating: "5 stars",
        getImageSrc: () => require("../assets/sophie_m.jpg")
    },
    {
        name: "Tom H.",
        comment: "From the delicious food to the excellent service, Little Lemon's exceeded all my expectations!",
        rating: "5 stars",
        getImageSrc: () => require("../assets/tom_h.jpg")
    }
];





const TestimonialSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground={false}
    backgroundColor="brand.secondary2"
    my={10}>
    <Box spacing={40} >
        <HStack justifyContent="center" my={30}>
            <Heading as="h1">Testimonial</Heading>
        </HStack>
        <HStack>
            <Box marginTop={10}
            display="flex" gap={10}
            >
                {testimonials.map((item) => (
                    <TestimonialCard
                    imgSrc={item.getImageSrc()}
                    name={item.name}
                    comment={item.comment}
                    rating={item.rating}
                    />
                ))}
            </Box>
        </HStack>
    </Box>
  </FullScreenSection>
);

export default TestimonialSection;