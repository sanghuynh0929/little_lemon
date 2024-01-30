import { Box, Container, SimpleGrid, Stack, Image, Text, Link, Flex} from "@chakra-ui/react"
import logo from "../assets/logo512.png"
const Footer = () => {

    const handleClick =(Link) => () => {
        const id = `${Link}-form`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <>
        <Box
         backgroundColor="#FFFFFF"
         isDarkBackground
         p={8}
         alignItems="center"
         spacing={8}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid  columns={4} spacingX='40px' spacingY='20px' spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Image
                             src={logo}
                             alt="Little Lemon footer logo"
                             objectFit="cover"
                             gap="4"
                            />
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>Company</Text>
                        <Link href={'/'}>Home</Link>
                        <Link href={'/about'}>About</Link>
                        <Link href={'/menu'}>Menu</Link>
                        <Link onClick={handleClick("booking")}>Reservations</Link>
                        <Link href={'/orderonline'}>Order onlines</Link>
                        <Link href={'login'}>Login</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>Contact Us</Text>
                        <Text fontWeight={'semibold'}>Address:</Text>
                        <Text>00 Little Lemon Street</Text>
                        <Text fontWeight={'semibold'}>Phone number:</Text>
                        <Text>0-000-000-000</Text>
                        <Text fontWeight={'semibold'}>Email:</Text>
                        <Text>hi@littlelemon.test</Text>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>Social Media Links</Text>
                        <Link href={'https://www.facebook.com/'}>Facebook</Link>
                        <Link href={'https://www.instagram.com/'}>Instagram</Link>
                        <Link href={'https://www.linkedin.com/'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
        <Box
         bg="brand.primary1" color="white"
         >
            <Flex
             alignItems={'center'}
             justifyContent={'center'}
             margin={'0 auto'}
             px={'12'}
             heigh={'16'}
            >
                <Text>© 2023 Little Lemon Restaurant. All rights reserved</Text>
            </Flex>
        </Box>
        </>
    )
}

export default Footer