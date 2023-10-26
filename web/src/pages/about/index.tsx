import { PicCard } from "@/components/ui/pictureCard";
import {
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  Stack,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { FC } from "react";

const AboutUs: FC = () => {
  return (
    <>
      <Flex
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
      >
        <Stack spacing={2} align="center" pt={4}>
          <Heading as="h1">About Us</Heading>
        </Stack>
      </Flex>
      <HStack justifyContent="center" alignItems="center">
        <PicCard
          img={"images/pexels-suzy-hazelwood-1120575.jpg"}
          alt={""}
          heading={"Our Mission"}
        >
          At ByteBite, our mission is to provide you with powerful tools and
          insights to help you achieve your nutritional and wellness goals.
        </PicCard>
        <PicCard
          img={"images/pexels-any-lane-5945660.jpg"}
          alt={""}
          heading={"Why Choose Us?"}
        >
          We believe in simplicity and accuracy. ByteBite offers seamless
          nutritional tracking and calculations, making your journey to a
          healthier you easier.
        </PicCard>
        <PicCard
          img={"images/pexels-ylanite-koppens-2008135.jpg"}
          alt={""}
          heading={"Your Success is Our Success"}
        >
          We're here to support you in achieving your health and fitness goals.
          Let us handle the complex calculations while you focus on your
          well-being.
        </PicCard>
      </HStack>
    </>
  );
};

export default AboutUs;
