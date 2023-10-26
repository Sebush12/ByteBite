import { Box, Text, VStack, Flex, Heading, Stack } from "@chakra-ui/react";
import { FC } from "react";

const ContactUs: FC = () => {
  return (
    <>
      <Flex
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
      >
        <Stack spacing={2} align="center" pt={4}>
          <Heading as="h1">Contact Us</Heading>
        </Stack>
      </Flex>
      <VStack spacing={4} alignItems="center" pt={4}>
        <Text>
          If you have any questions or need assistance, please feel free to
          contact us using the information below.
        </Text>
        <Text>Email: contact@bytebite.com</Text>
        <Text>Phone: (123) 456-7890</Text>
        <Text>Address: 1234 ByteBite Street, Nutritionville, NV 56789</Text>
      </VStack>
    </>
  );
};

export default ContactUs;
