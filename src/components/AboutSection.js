import React from "react";
import { Avatar, Heading, VStack, HStack, Image, Text, Box, Button, Container, Flex } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import TestimonialCard from "./TestimonialCard";
import RestaurantImage from "../assets/RestaurantImage.jpg"
import Mediterranean from "../assets/Mediterranean.jpg"

const AboutSection = () => (
  <FullScreenSection
    id="about-section"
    isDarkBackground={false}
    backgroundColor="brand.primary2"
    alignItems="center"
    justifyContent="center"
    my={20}>

    <Heading as="h2" size="xl" mb="4">
    Welcome to Little Lemon: A Taste of Mediterranean Tradition
    </Heading>
    <VStack textAlign="left" mx="auto" mt="8" p="4">
        <HStack justifyContent="space-between" maxW="70vw" spacing={20}>
            <Image
            borderColor="brand.primary1"
            border="solid 2pt"
            src={RestaurantImage}
            alt="Little Lemon Restaurant"
            mx="auto"
            mb="8"
            borderRadius="md"
            h={300}
            w={500}
            objectFit="cover"
            boxShadow="md"
            />
            <Box>
                <Text fontSize="lg" mb="4">
                    Nestled in the vibrant streets of Chicago, Little Lemon has been a
                    culinary cornerstone since its inception in 2005. What started as a
                    humble family venture has blossomed into a celebrated destination for
                    those seeking an authentic taste of the Mediterranean.
                </Text>

                <Text fontSize="lg" mb="4">
                    Our journey began with a passion for sharing the rich tapestry of
                    flavors woven into traditional Mediterranean cuisine. Passed down
                    through generations, our recipes reflect a deep respect for culinary
                    heritage while embracing the innovation of modern gastronomy.
                </Text>
            </Box>
        </HStack>
        <HStack justifyContent="space-between" maxW="70vw" spacing={20}>
            <Box>
                <Text fontSize="lg" mb="8">
                    At Little Lemon, we believe that every dish tells a story. From the
                    savory aroma of our slow-cooked lamb to the tangy zest of our signature
                    lemon-infused salads, each bite invites you to embark on a culinary
                    voyage across the sun-drenched shores of the Mediterranean.
                </Text>
                <Text fontSize="lg" mb="8">
                    As a family-owned establishment, we take pride in creating a warm and
                    inviting atmosphere where every guest feels like part of our extended
                    family. From intimate dinners to festive celebrations, you are welcomed
                    to experience the hospitality and flavors of the Mediterranean here, like never before.
                </Text>
            </Box>
            <Image
                borderColor="brand.primary1"
                border="solid 2pt"
                src={Mediterranean}
                alt="Mediterranean Cuisine"
                mx="auto"
                mb="8"
                h={350}
                w={550}
                objectFit="cover"
                borderRadius="md"
                boxShadow="md"
            />
        </HStack>
    </VStack>
  </FullScreenSection>
);

export default AboutSection;