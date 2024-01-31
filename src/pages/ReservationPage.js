import { VStack, Heading, Box, FormControl, FormLabel, FormErrorMessage, Button, Flex, HStack, Input, Select} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import FullScreenSection from "../components/FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../contexts/alertContext";
import { React, useEffect } from "react"


const ReservationPage = () => {
    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            guests: "",
            date: "",
            time:"",

        }, /* initialValues use id ="" */
        onSubmit: (values) => {
            submit(values);
        }, // submit(values)

        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            guests: Yup.string().min(1,"Must be at least 1 guest").max(10,"Please call us if you have more than 10 guests").required("Required"),
            time: Yup.string().notOneOf([Yup.ref("Choose a time")], "Required").required("Required"),
        }).shape({
            date: Yup.date()
            .min(new Date(), "Invalid Date")
            .required("required")
            }),
    });

    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message)
            if (response.type === "success") {
                formik.resetForm();
            } else {
                // console.log("failed");
            }
        }
    }, [response])

    return (
        <FullScreenSection
            isDarkBackground={false}
            bg='brand.primary2'
            py={16}
            spacing={8}
            align={'center'}
            justify={'center'}
        >
            <VStack spacing={8} w="100vw" py={12} px={6} bgColor={'#f4ce14'} rounded={'lg'}>
                <Heading as="h1" id="booking-form" color={'#495e57'}>
                    Reserve a Table
                </Heading>
                <Box w="50vw" p={8} rounded={'lg'} borderWidth={1} boxShadow={'lg'} backgroundColor={'gray.50'}>
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={8} fontSize={'lg'}>
                            <FormControl isInvalid={!!formik.errors.name && formik.touched.name}>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Input type={'text'} id="name" data-testid="name" name="Full Name" {...formik.getFieldProps("name")}></Input>
                                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input id="email" name="email" data-testid="email" type="email" placeholder="email@example.com" {...formik.getFieldProps("email")}/>
                                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
                                <FormLabel>Number of guests</FormLabel>
                                <Input type="number" data-testid="guests" placeholder="1" min="1" max="12" id="guests" {...formik.getFieldProps("guests")} />
                                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                                <FormLabel>Choose date</FormLabel>
                                <Input type="date" data-testid="date" id="res-date" {...formik.getFieldProps("date")}/>
                            </FormControl>
                            <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                                <FormLabel htmlFor="time">Choose time</FormLabel>
                                <Select id="time" name="time" data-testid="time" placeholder="Choose a time" {...formik.getFieldProps("time")}>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="18:00">18:00</option>
                                    <option value="19:00">19:00</option>
                                    <option value="20:00">20:00</option>
                                    <option value="21:00">21:00</option>
                                    <option value="22:00">22:00</option>
                                </Select>
                                 <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                            </FormControl>
                            <Button
                             type="submit"
                             bg={'brand.primary2'}
                             size={'lg'}
                             _hover={{bg:'yellow.500'}}
                             isLoading={isLoading}
                             >
                                Make Your Reservation</Button>
                        </VStack>
                    </form>
                </Box>
            </VStack>
        </FullScreenSection>
    );
}

export default ReservationPage;
