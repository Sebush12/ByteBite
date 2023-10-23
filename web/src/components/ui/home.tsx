import {
  Box,
  Image,
  Text,
  VStack,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  Button,
  ModalBody,
  Heading,
  Stack,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { SignupForm } from "../forms/signup";
import { PicCard } from "./pictureCard";

export const Home: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
      >
        <Stack spacing={2} align="center" pt={4}>
          <Heading as="h3" size="md">
            Welcome to
          </Heading>
          <Heading as="h1">ByteBite Tracker</Heading>
        </Stack>
      </Flex>
      <HStack justifyContent="center" alignItems="center">
        <PicCard
          img={"images/pexels-lukas-669623.jpg"}
          alt={""}
          heading={"Graphical Insights for Nutritional Success"}
        >
          At ByteBite, we understand that achieving your nutritional goals
          requires more than just logging your meals and activities. It's about
          gaining valuable insights and visualizing your progress towards a
          healthier you. That's why we employ the power of graphs to
          revolutionize the way you track your nutrition and wellness journey.
        </PicCard>
        <PicCard
          img={"images/pexels-pixabay-220301.jpg"}
          alt={""}
          heading={"Seamless Nutritional Calculations for Your Convenience"}
        >
          At ByteBite, we believe in making nutrition tracking as effortless as
          possible for our users. Our platform is designed to handle all the
          complex calculations, ensuring that you have accurate and up-to-date
          nutritional information at your fingertips.
        </PicCard>
        <PicCard
          img={"images/pexels-kate-trifo-4024914.jpg"}
          alt={""}
          heading={"Focus on your acvitity while we do the work for you"}
        >
          {" "}
          At ByteBite, we understand that achieving your health and fitness
          goals isn't just about what you eat but also how you move. Once your
          done putting in your daily food intake, WE DO ALL THE WORK FOR YOU!
          Saving you more time to put towards any other focus towards your goal
          of a healthy lifestyle.
        </PicCard>
      </HStack>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <SignupForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
