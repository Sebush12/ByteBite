
import {
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";

const ContactUs: FC = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bgGradient="linear(to-b, gray.100, white)"
    >
      <Heading as="h1" size="2xl" mb={4}>
        Contact Us
      </Heading>
      <VStack spacing={4} align="center">
        <Text fontSize="xl">
          If you have any questions or need assistance, please feel free to
          contact us using the information below:
        </Text>
        <Text fontSize="lg">Email: contact@bytebite.com</Text>
        <Text fontSize="lg">Phone: (123) 456-7890</Text>
        <Text fontSize="lg">
          Address: 1234 ByteBite Street, Nutritionville, NV 56789
        </Text>
        <Button
          colorScheme="blue"
          size="lg"
          mt={6}
          onClick={() => alert("Your message has been sent.")}
        >
          Send Message
        </Button>
      </VStack>
    </Flex>
  );
};

export default ContactUs;
