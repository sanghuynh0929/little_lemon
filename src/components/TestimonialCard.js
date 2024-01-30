import {VStack, HStack, Box, Text, Avatar, Heading} from "@chakra-ui/react"

const TestimonialCard = ({imgSrc, name, rating, comment}) => {
    return (
        <>
        <VStack color='white' bg="brand.primary1" rounded={'lg'} w={280} h={230} border="black solid 1pt">
            <VStack spacing={4} p={4} alignItems= {'flex-start'} >
                <HStack justifyContent= {'space-between'} alignItems={'center'} spacing={30}>
                    <Avatar src={imgSrc} alt={name} objectFit="cover"/>
                    <Heading as="h3" size={'md'}>{name}</Heading>
                    <Heading as="h3" size={'md'} color={'brand.primary2'}>{rating}</Heading>
                </HStack>
                <Text fontSize='lg'>{comment}</Text>
            </VStack>
        </VStack>
        </>
    )
}

export default TestimonialCard;