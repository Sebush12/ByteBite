import React, { FC } from 'react';
import {
  Heading,
  Stack,
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Select,
  Textarea,
  SimpleGrid
} from '@chakra-ui/react';

export const Account: FC = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [avatarURL, setAvatarURL] = useState();

  return (
    <>
      <Box margin={1}>
        <Card align="left">
          <CardHeader>
            <Heading size="md" padding={2}>
              Profile Settings
            </Heading>
            <Stack>
              <Avatar size={'lg'} />
            </Stack>
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={2} spacing={5}>
              <Box pb={5}>
                <Text>Gender</Text>
                <Select placeholder="select option" size="sm">
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                </Select>
              </Box>
              <Box pb={5}>
                <Text>Caloric Goal</Text>
                <Textarea
                  isReadOnly={true}
                  placeholder="Here is a sample placeholder"
                  size="mg"
                  variant="outline"
                />
              </Box>
            </SimpleGrid>
          </CardBody>
          <CardFooter />
        </Card>
      </Box>

      <Box margin={1}>
        <Card align="center">
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter />
        </Card>
      </Box>
    </>

  // <Box height={"90vh"}>
  //   <Flex justifyContent="flex-start" alignItems="center" p={4}>
  //     <Box></Box>
  //     <Stack spacing={2} align="left">
  //       <Avatar size={"2xl"} src={avatarURL} />
  //     </Stack>
  //     <Stack spacing={2} align="center" padding={4}>
  //       <Heading as="h1">Account Settings</Heading>
  //     </Stack>
  //   </Flex>
  // </Box>
  );
};

export default Account;
