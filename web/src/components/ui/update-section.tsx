import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading, HStack, Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue
} from "@chakra-ui/react";
import { FC } from "react";
import AddFoodItem from "@/components/forms/add-food";

export const UpdateSect:FC = () => {
  return (
    <Center mt='2em'>
      <Card minW='100em' bg={useColorModeValue("blackAlpha", "whiteAlpha.300")}>
        <CardHeader> 
          <Heading textAlign="center">Update Your Progress</Heading>
        </CardHeader>
        <CardBody>
          <Tabs isFitted variant="enclosed">
            <TabList mb='1em' color={useColorModeValue("blackAlpha", "whiteAlpha")}>
              <Tab bg={useColorModeValue("purple.200", "purple.500")}>Calories</Tab>
              <Tab bg={useColorModeValue("green.200", "green.500")}>Exercise</Tab>
              <Tab bg={useColorModeValue("orange.200", "orange.500")}>Weight</Tab>
            </TabList>
            <TabPanels>
              <TabPanel >
                <HStack>
                  <Spacer />
                  <Heading textAlign="center" noOfLines={2}>Coming soon...</Heading>
                  <Spacer />
                  <AddFoodItem />
                  <Spacer />
                </HStack>
              </TabPanel>
              <TabPanel>
                <Spacer />
                <Heading textAlign="center" noOfLines={2}>Coming soon...</Heading>
                <Spacer />
              </TabPanel>
              <TabPanel>
                <Spacer />
                <Heading textAlign="center" noOfLines={2}>Coming soon...</Heading>
                <Spacer />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </Center>
  );
};

export default UpdateSect;
