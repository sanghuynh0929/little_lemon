import {VStack, HStack, Box, Text, Image, Heading} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const FoodCard = ({imgSrc, itemName, itemPrice, itemDesc}) => {
    return (
        <>
        <VStack color='black' bg="#FFFFFF" rounded={'lg'} w={300} h={480} border="black solid 1pt">
            <Image src={imgSrc} alt={itemName} rounded={'lg'} w="100vw" h="25vh" objectFit="cover"
            />
            <VStack spacing={4} p={4} alignItems= {'flex-start'} >
                <HStack justifyContent= {'space-between'} alignItems={'center'} spacing={30}>
                    <Heading as="h3" size={'md'}>{itemName}</Heading>
                    <Heading as="h3" size={'md'} color={'brand.secondary1'}>{itemPrice}</Heading>
                </HStack>
                <Text color='black' fontSize='lg'>{itemDesc}</Text>
                <HStack display="flex" justifyContent="flex-start">
                    <Link to="/orderonline" ><Text  fontWeight="bolder">Order a delivery</Text></Link>
                </HStack>
            </VStack>
        </VStack>
        </>
    )
}

export default FoodCard;