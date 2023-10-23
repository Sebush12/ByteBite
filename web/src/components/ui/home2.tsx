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
} from "@chakra-ui/react";
import { FC } from "react";
import { SignupForm } from "../forms/signup";

export const Home: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
      >
        <Box
          textAlign="center"
          paddingTop={"20px"}
          maxW="500px"
          marginBottom="20px"
          marginTop="20px"
        >
          <Box boxSize="300px" display="flex" alignItems="center" margin="auto">
            <Image
              borderRadius="10px"
              boxSize="300px"
              src="images\pexels-lukas-669623.jpg"
              onLoad={() => console.log("Image loaded")}
              onError={() => console.error("Image error")}
            />

            <Box boxSize="auto" flex="1" padding="20px">
              <Text
                fontSize={"lg"}
                background={"ButtonShadow"}
                backgroundColor={"gray.300"}
                borderRadius={"10px"}
                color={"black"}
                fontFamily={"heading"}
                margin={"10px"}
                opacity={"70%"}
              >
                Graphical Insights for Nutritional Success
              </Text>
              <Text
                padding={"10px"}
                fontWeight={"bold"}
                border={"1px"}
                borderColor={"gray.300"}
                borderRadius={"10px"}
              >
                At ByteBite, we understand that achieving your nutritional goals
                requires more than just logging your meals and activities. It's
                about gaining valuable insights and visualizing your progress
                towards a healthier you. That's why we employ the power of
                graphs to revolutionize the way you track your nutrition and
                wellness journey.
              </Text>
            </Box>

            <Box
              boxSize="300px"
              display="flex"
              alignItems="center"
              margin="auto"
            >
              <Image
                borderRadius="10px"
                boxSize="300px"
                src="images\pexels-pixabay-220301.jpg"
                alt="calculations"
                onLoad={() => console.log("Image loaded")}
                onError={() => console.error("Image error")}
                margin="auto"
              />
            </Box>

            <Box boxSize="auto" flex="1" padding="20px">
              <Text
                fontSize={"lg"}
                background={"ButtonShadow"}
                backgroundColor={"gray.300"}
                borderRadius={"10px"}
                color={"black"}
                fontFamily={"heading"}
                margin={"10px"}
                opacity={"70%"}
              >
                Seamless Nutritional Calculations for Your Convenience
              </Text>
              <Text
                padding={"10px"}
                fontWeight={"bold"}
                border={"1px"}
                borderColor={"gray.300"}
                borderRadius={"10px"}
              >
                At ByteBite, we believe in making nutrition tracking as
                effortless as possible for our users. Our platform is designed
                to handle all the complex calculations, ensuring that you have
                accurate and up-to-date nutritional information at your
                fingertips.
              </Text>
            </Box>

            <Box
              boxSize="300px"
              alignItems="center"
              margin="auto"
              paddingTop={"10px"}
            >
              <Image
                borderRadius="10px"
                objectFit="cover"
                boxSize="300px"
                src="images\pexels-kate-trifo-4024914.jpg"
                alt="activity"
                onLoad={() => console.log("Image loaded")}
                onError={() => console.error("Image error")}
                margin="auto"
              />
            </Box>

            <Box boxSize="auto" flex="1" padding="20px">
              <Text
                fontSize={"lg"}
                background={"ButtonShadow"}
                backgroundColor={"gray.300"}
                borderRadius={"10px"}
                color={"black"}
                fontFamily={"heading"}
                margin={"10px"}
                opacity={"70%"}
              >
                Focus on your acvitity while we do the work for you
              </Text>
              <Text
                padding={"10px"}
                fontWeight={"bold"}
                border={"1px"}
                borderColor={"gray.300"}
                borderRadius={"10px"}
              >
                At ByteBite, we understand that achieving your health and
                fitness goals isn't just about what you eat but also how you
                move. Once your done putting in your daily food intake, WE DO
                ALL THE WORK FOR YOU! Saving you more time to put towards any
                other focus towards your goal of a healthy lifestyle.
              </Text>
            </Box>

            <VStack pt="3rem">
              <Button onClick={onOpen}>Sign Up</Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
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
