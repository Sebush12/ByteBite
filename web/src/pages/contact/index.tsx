import {

  Text,
  VStack,
  Flex,
  Heading,
  Button,
  useToast
} from "@chakra-ui/react";
import { FC } from "react";

const ContactUs: FC = () => {
  const toast = useToast()
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="90vh"
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
          onClick={() =>
            toast({
              title: 'Message Sent',
              description: "We have received your message!",
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Send Message
        </Button>
      </VStack>
    </Flex>
  );
};

export default ContactUs;
