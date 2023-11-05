import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Link,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  useDisclosure
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FC, useState } from 'react';
import { SignupForm } from './signup';
import { signIn } from 'next-auth/react';

export const Login: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => signIn('credentials', {
      email: values.email,
      password: values.password
    })
  });
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
          <Text fontSize={'lg'}>to continue reaching your goals</Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  id="email"
                  name="email"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    id="password"
                    name="password"
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
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                  type="submit"
                >
                  Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Not a user?{' '}
                  <Link color={'blue.400'} onClick={onOpen}>
                    Signup
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
                      <SignupForm />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};
