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
  FormErrorMessage,
  useToast
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FC, useState } from 'react';
import { useFormik } from 'formik';
import { graphql } from '@/gql';
import { useSession } from 'next-auth/react';
import { MutationChangePasswordArgs } from '@/gql/graphql';
import { useMutation } from 'urql';

const CHANGE_PASSWORD = graphql(`
  mutation ChangePassword(
    $email: String!
    $newPassword: String!
    $oldPassword: String!    
  ) {
    changePassword(
      email: $email,
      newPassword: $newPassword,
      oldPassword: $oldPassword
    ) {
      user {
        id
        email
        firstName
      }
    }
  }
`);

interface ChangePasswordProps { closeModal: () => void; }
export const ChangePassword: FC<ChangePasswordProps> = ({ closeModal }) => {
  const {data} = useSession();
  const [ , changePassword] = useMutation(CHANGE_PASSWORD);
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCreate = async (
    {email, oldPassword, newPassword}: MutationChangePasswordArgs
  ): Promise<any> => {
    const values = {
      email,
      oldPassword,
      newPassword
    };
    const response = await changePassword(values);

    if (response.error) {
      // Handle the error
      console.error('Error: ', response.error);
      toast({
        title: 'Error',
        description: 'There was an error changing your password.',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    } else {
      // Success! Handle the response
      console.log('Item created', response.data?.createFoodItem);
      closeModal();
      toast({
        position: 'top',
        title: 'Success',
        description: 'Password Changed Successfully!',
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      old_password: '',
      new_password: '',
      confirm_password: ''
    },
    onSubmit: (values) => {
      const variables = {
        email: data?.user?.email ?? '',
        oldPassword: values.old_password,
        newPassword: values.new_password
      };
      handleCreate(variables);
    }
  });

  return (
    <Flex align={'center'} justify={'center'}>
      <form
        id="change_password_form"
        onSubmit={formik.handleSubmit}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Change Password
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
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
                    type={showPassword ? 'text' : 'password'}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
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
                    type={showNewPassword ? 'text' : 'password'}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
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
                    type={showConfirmPassword ? 'text' : 'password'}
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
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
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
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
