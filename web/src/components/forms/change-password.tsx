import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Link,
  Stack,
  Text,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Modal,
  useDisclosure,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FC, useState } from "react";
import { Login } from "./login";
import { FormikHelpers, useFormik } from "formik";
import { graphql } from "@/gql";

const CHANGE_PASSWORD = graphql(`
  mutation ChangePassword(
    $calories: Int!
    $carbs: Decimal!
    $fat: Decimal!
    $name: String!
    $protein: Decimal!
  ) {
    changePassword(
      calories: $calories
      carbs: $carbs
      fat: $fat
      name: $name
      protein: $protein
    ) {
      foodItem {
        calories
        carbs
        fat
        name
        protein
      }
    }
  }
`);

type ChangePasswordProps = { closeModal: () => void };
export const ChangePassword: FC<ChangePasswordProps> = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreate = async (
    values: any,
    { resetForm }: FormikHelpers<any>
  ) => {
    console.log("Enter Here");
    closeModal();
  };

  const formik = useFormik({
    initialValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
    onSubmit: (values, formikBag) => {
      handleCreate(values, formikBag);
    },
  });

  return (
    <Flex align={"center"} justify={"center"}>
      <form
        id="change_password_form"
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Change Password
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack></HStack>

              <FormControl id="current-password" isRequired>
                <FormLabel>Current Password</FormLabel>
                <InputGroup>
                  <Input
                    onChange={formik.handleChange}
                    value={formik.values.old_password}
                    id="old_password"
                    name="old_password"
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={(): void =>
                        setShowPassword(
                          (showPassword: boolean) => !showPassword
                        )
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl id="new-password" isRequired>
                <FormLabel>New Password</FormLabel>
                <InputGroup>
                  <Input
                    onChange={formik.handleChange}
                    value={formik.values.new_password}
                    id="new_password"
                    name="new_password"
                    type={showNewPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={(): void =>
                        setShowNewPassword(
                          (showNewPassword: boolean) => !showNewPassword
                        )
                      }
                    >
                      {showNewPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl
                id="confirm-password"
                isRequired
                isInvalid={
                  formik.values.confirm_password != formik.values.new_password
                }
              >
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    onChange={formik.handleChange}
                    value={formik.values.confirm_password}
                    id="confirm_password"
                    name="confirm_password"
                    type={showConfirmPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={(): void =>
                        setShowConfirmPassword(
                          (showConfirmPassword: boolean) => !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>Password Does Not Match!</FormErrorMessage>
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  isDisabled={!formik.isValid}
                  type="submit"
                  form="change_password_form"
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Confirm Password
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Flex>
  );
};
