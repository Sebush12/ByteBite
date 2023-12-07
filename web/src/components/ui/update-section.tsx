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
} from '@chakra-ui/react';
import { FC } from 'react';
import AddFoodItem from '@/components/forms/add-food';
import UpdateWeight from '../forms/update-weight';
import UpdateCalories from '../forms/update-food';

export const UpdateSect:FC = () => {
  return (
    <Center mt='2em'>
      <Card minW='100em' bg={useColorModeValue('blackAlpha', 'whiteAlpha.300')}>
        <CardHeader>
          <Heading textAlign="center">Update Your Progress</Heading>
        </CardHeader>
        <CardBody>
          <Tabs isFitted variant="enclosed">
            <TabList mb='1em' color={useColorModeValue('blackAlpha', 'whiteAlpha')}>
              <Tab bg={useColorModeValue('purple.200', 'purple.500')}>Calories</Tab>
              <Tab bg={useColorModeValue('green.200', 'green.500')}>Exercise</Tab>
              <Tab bg={useColorModeValue('orange.200', 'orange.500')}>Weight</Tab>
            </TabList>
            <TabPanels>
              <TabPanel >
                <HStack>
                  <Spacer />
                  <UpdateCalories />
                  <Spacer />
                  <AddFoodItem />
                  <Spacer />
                </HStack>
              </TabPanel>
              <TabPanel>
                <Spacer pt={20} pb={40} />
                <Heading textAlign="center" noOfLines={1} pt={4} pb={4}>Coming soon...</Heading>
                <Spacer pt={40} pb={20} />
              </TabPanel>
              <TabPanel>
                <Spacer pt={12} pb={12} />
                <UpdateWeight />
                <Spacer pt={10} pb={10} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </Center>
  );
};

export default UpdateSect;
