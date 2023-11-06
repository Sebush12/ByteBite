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
                <Input
                  value="Your Caloric Goal" // Add your caloric goal value here
                  isReadOnly={true}
                  variant="outline"
                />
              </Box>
              <Box pb={5}>
                <Text>Weight</Text>
                <Input
                  value="Your Weight" // Add your weight value here
                  isReadOnly={true}
                  variant="outline"
                />
              </Box>
              <Box pb={5}>
                <Text>Weight Goal</Text>
                <Input
                  value="Your Weight Goal" // Add your weight goal value here
                  isReadOnly={true}
                  variant="outline"
                />
              </Box>
            </SimpleGrid>
          </CardBody>
          <CardFooter>
            <Button variant="outline" alignSelf="flex-end">
              Save
            </Button>
          </CardFooter>
        </Card>
      </Box>

      <Box margin={1}>
        <Card align="left">
          <CardHeader>
            <Heading size="md" padding={2}>
              Account Settings
            </Heading>
          </CardHeader>
          <CardBody>
            <SimpleGrid columns={2} spacing={5}>
              <Box pb={5}>
                <Text>Display Name</Text>
                <Input
                  value="Your Display Name" // Add your display name here
                  isReadOnly={true}
                  variant="outline"
                />
              </Box>
              <Box pb={5}>
                <Text>Username</Text>
                <Input
                  value="Your Username" // Add your username here
                  isReadOnly={true}
                  variant="outline"
                />
              </Box>
              <Box pb={5}>
                <Text>Email</Text>
                <Input
                  value="Your Email" // Add your email here
                  isReadOnly={true}
                  variant="outline"
                />
              </Box>
              <Box pb={5}>
                <Text>Phone Number</Text>
                <Input
                  value="Your Phone Number" // Add your phone number here
                  isReadOnly={true}
                  variant="outline"
                />
              </Box>
              <Box pb={5}>
                <Button variant="outline">Change Password</Button>
              </Box>
            </SimpleGrid>
          </CardBody>
          <CardFooter>
            <Button variant="outline" alignSelf="flex-end">
              Save
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};

export default Account;
