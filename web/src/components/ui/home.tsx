import {
  Box,
  Button,
  HStack,
  Image,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Navbar } from "@/components/navbar/navbar";
import { SelectedPage } from "@/pages/shared/types";
import { RouteButton } from "@/pages/shared/route-button";

export const Home: FC = () => {
  const route = useRouter();
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  return (
    <Box bg="darkgreen" minHeight="100vh">
      <Navbar
        isTopOfPage={true}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
      />

      <Flex
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
      >
        <Box
          color="white"
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
          </Box>

          <Box boxSize="auto" flex="1" padding="20px">
            <Text
              fontSize={"lg"}
              background={"ButtonShadow"}
              backgroundColor={"pink"}
              borderRadius={"10px"}
              color={"black"}
              fontFamily={"heading"}
            >
              Graphical Insights for Nutritional Success
            </Text>
            <Text paddingTop={"20px"} fontWeight={"bold"}>
              At ByteBite, we understand that achieving your nutritional goals
              requires more than just logging your meals and activities. It's
              about gaining valuable insights and visualizing your progress
              towards a healthier you. That's why we employ the power of graphs
              to revolutionize the way you track your nutrition and wellness
              journey.
            </Text>
          </Box>

          <Box boxSize="300px" display="flex" alignItems="center" margin="auto">
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
              backgroundColor={"pink"}
              borderRadius={"10px"}
              color={"black"}
              fontFamily={"heading"}
            >
              Seamless Nutritional Calculations for Your Convenience
            </Text>
            <Text paddingTop={"20px"} fontWeight={"bold"}>
              At ByteBite, we believe in making nutrition tracking as effortless
              as possible for our users. Our platform is designed to handle all
              the complex calculations, ensuring that you have accurate and
              up-to-date nutritional information at your fingertips.
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
              backgroundColor={"pink"}
              borderRadius={"10px"}
              color={"black"}
              fontFamily={"heading"}
            >
              Seamless Integration of Exercise Tracking for a Holistic Health
              Approach
            </Text>
            <Text paddingTop={"20px"} fontWeight={"bold"}>
              At ByteBite, we understand that achieving your health and fitness
              goals isn't just about what you eat but also how you move. Once
              your done putting in your daily food intake, WE DO ALL THE WORK
              FOR YOU! Saving you more time to put towards any other focus
              towards your goal of a healthy lifestyle.
            </Text>
          </Box>

          <VStack pt="3rem">
            <RouteButton buttonText="Sign Up Now" routingPath={"./signup"} />
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
