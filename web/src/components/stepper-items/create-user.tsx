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
  FormErrorMessage
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FC, ReactElement, useState } from 'react';
import { Login } from '../forms/login';
import { Field, Formik } from 'formik';

export interface AddUserProps {
  handleAddUser: (userData: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    username: string;
  }) => void;
}


export const AddUser: FC<AddUserProps> = ({ handleAddUser }) => {

  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
            Welcome!
        </Heading>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <Formik initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            onSubmit={async (values): Promise<any> => {
              const variables = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password,
                username: values.email
              };
              handleAddUser(variables);}}
            >
              {({handleSubmit, errors, isValid, touched, values}): ReactElement => (
                <form onSubmit={handleSubmit}>
                  <HStack>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel htmlFor='firstname'>First Name</FormLabel>
                        <Field
                          as={Input}
                          type="text"
                          id="firstName"
                          name="firstName" />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel htmlFor='lastName'>Last Name</FormLabel>
                        <Field
                          as={Input}
                          type="text"
                          id="lastName"
                          name="lastName" />
                      </FormControl>
                    </Box>
                  </HStack>
                  <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Field
                      as={Input}
                      type="text"
                      id="email"
                      name="email" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <InputGroup>
                      <Field
                        as={Input}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password" />
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={(): void =>
                            setShowPassword((showPassword: boolean) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl isInvalid={!!errors.confirmPassword && touched.confirmPassword} >
                    <FormLabel htmlFor='confirmPassword'>Confirm Password</FormLabel>
                    <InputGroup>
                      <Field
                        as={Input}
                        type={showPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        name="confirmPassword"
                        validate={(value: string): string | undefined => {
                          let error;
                          if(value != values.password) {
                            error = 'Passwords Must Match!';
                          }
                          console.log(error);
                          return error;
                        }}
                      />
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={(): void =>
                            setShowPassword((showPassword: boolean) => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      isDisabled={!isValid}
                      size="lg"
                      bg={'blue.400'}
                      color={'white'}
                      _hover={{bg: 'blue.500'}}
                      type='submit'
                    >
                Continue
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={'center'}>
                      {'Already a user? '}
                      <Link color={'blue.400'} onClick={onOpen}>
                  Login
                      </Link>
                    </Text>
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
                          <Login />
                        </ModalBody>
                      </ModalContent>
                    </Modal>
                  </Stack>
                </form>
              )}
            </Formik>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default AddUser;
