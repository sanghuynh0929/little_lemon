import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // If using React Router
import FullScreenSection from "../components/FullScreenSection";
import NotFound from "../assets/404.png"

const NotFoundPage = () => {
  return (
    <FullScreenSection
        id="404-section"
        justifyContent="center"
        alignItems="center"
        isDarkBackground={false}
        backgroundColor="white"
        my="20vh"
    >
        <Box align="center" mt="20">
            <Image src={NotFound}/>
            <Box my={30}/>
            <Heading as="h1" size="xl" mb="4">
                404 - Page Not Found
            </Heading>
            <Text fontSize="lg" mb="4">
                Oops! It seems like you've stumbled upon a page that doesn't exist.
            </Text>
            <Link to="/"><Text color="blue" fontSize="lg" mb="4">
                Don't worry, let's get you back home
            </Text>
            </Link>
        </Box>
    </FullScreenSection>
  );
};

export default NotFoundPage;
