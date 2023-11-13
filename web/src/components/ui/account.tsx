import React, { FC } from "react";
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
  SimpleGrid,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { SignupForm } from "../forms/signup";
import { ChangePassword } from "../forms/change-password";
import EditableControls from "@/pages/shared/edit-textbox";

export const Account: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: passwordModalOpen,
    onOpen: openPasswordModal,
    onClose: closePasswordModal,
  } = useDisclosure();

  const displayName = "User's display name";
  const email = "user@example.com";
  const caloricGoal = "userCaloricGoal";
  const displayUserWeight = "Your Weight";

  return (
    <Stack spacing={4} p={4}>
      <Card>
        <CardHeader>
          <Heading size="md">Profile Settings</Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={2} spacing={4}>
            <Box>
              <Text as="b">Gender</Text>
              <Select placeholder="Select option" size="sm">
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </Select>
            </Box>
            <Box>
              <Text as="b">Caloric Goal</Text>
              <Input value={caloricGoal} isReadOnly={true} variant="outline" />
            </Box>
            <Box>
              <Text as="b">Weight (lbs)</Text>
              <Editable
                textAlign="center"
                defaultValue="Weight"
                fontSize="2xl"
                isPreviewFocusable={false}
              >
                <EditablePreview />
                <Input as={EditableInput} />
                <EditableControls />
              </Editable>
              <Input
                value={displayUserWeight}
                isReadOnly={true}
                variant="outline"
              />
            </Box>
            <Box>
              <Text as="b">Weight Goal (lbs)</Text>
              <Editable
                textAlign="center"
                defaultValue="Your Weight Goal"
                fontSize="2xl"
                isPreviewFocusable={false}
              >
                <EditablePreview />
                <Input as={EditableInput} />
                <EditableControls />
              </Editable>
              <Input
                value="Your Weight Goal"
                isReadOnly={true}
                variant="outline"
              />
            </Box>
          </SimpleGrid>
        </CardBody>
        <CardFooter />
      </Card>

      <Card>
        <CardHeader>
          <Heading size="md">Account Settings</Heading>
        </CardHeader>
        <CardBody>
          <SimpleGrid columns={2} spacing={4}>
            <Box>
              <Text as="b">Display Name</Text>
              <Input value={displayName} isReadOnly={true} variant="outline" />
            </Box>
            <Box>
              <Text as="b">Email</Text>
              <Input value={email} isReadOnly={true} variant="outline" />
            </Box>
            <Box>
              <Button variant="outline" onClick={openPasswordModal}>
                Change Password
              </Button>
            </Box>
          </SimpleGrid>
        </CardBody>
        <CardFooter />
        <CardFooter />
      </Card>

      <Modal
        isCentered
        onClose={closePasswordModal}
        isOpen={passwordModalOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ChangePassword />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Account;
