import { FC } from "react";
import { VStack, Heading, HStack, Spacer, Flex } from "@chakra-ui/react";
import { PicCard } from "@/components/ui/pictureCard";

const AboutUs: FC = () => {
  return (
    <Flex direction="column" minH="90vh" position="relative">
      <VStack align="center" spacing={8} py={8}>
        <Heading as="h1" data-testid="about-heading">
          About Us
        </Heading>
        <HStack
          justifyContent="center"
          alignItems="center"
          spacing={4}
          padding={5}
        >
          <PicCard
            data-testid="about-mission"
            img={"images/pexels-suzy-hazelwood-1120575.jpg"}
            alt={"mission"}
            heading={"Our Mission"}
          >
            At ByteBite, our mission is to provide you with powerful tools and
            insights to help you achieve your nutritional and wellness goals.
          </PicCard>
          <Spacer />
          <PicCard
            img={"images/pexels-any-lane-5945660.jpg"}
            alt={"calc"}
            heading={"Why Choose Us?"}
          >
            We believe in simplicity and accuracy. ByteBite offers seamless
            nutritional tracking and calculations, making your journey to a
            healthier you easier.
          </PicCard>
          <Spacer />
          <PicCard
            data-testid="about-"
            img={"images/pexels-ylanite-koppens-2008135.jpg"}
            alt={"success"}
            heading={"Your Success is Our Success"}
          >
            {`We're here to support you in achieving your health and fitness goals.
          Let us handle the complex calculations while you focus on your
          well-being.`}
          </PicCard>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default AboutUs;
