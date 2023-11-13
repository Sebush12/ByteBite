import { ChangePassword } from "@/components/forms/change-password";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  SimpleGrid,
  Input,
  Button,
  CardFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import email from "next-auth/providers/email";
import React from "react";

export const AccountSettings = () => {
  const displayName = "User's display name";
  const email = "user@example.com";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: passwordModalOpen,
    onOpen: openPasswordModal,
    onClose: closePasswordModal,
  } = useDisclosure();
  return (
    <>
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
    </>
  );
};
