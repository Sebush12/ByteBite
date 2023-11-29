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
  useToast
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FC, useState } from 'react';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export const LoginReq: FC = () => {
  const [loginError, setLoginError] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      const response = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false
      });
      if(response?.error) {
        setLoginError(true);
        toast({
          title: 'Invalid email or password',
          status: 'error',
          isClosable: true,
          position: 'top'
        });
      } else {
        router.push('/calc');
      }
    }
  });

  return (
    <Flex align={'center'} justify={'center'} height="89vh">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Please Login To Use This Feature
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired isInvalid={loginError}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  id="email"
                  name="email"
                />
              </FormControl>
              <FormControl isRequired isInvalid={loginError}>
                <FormLabel htmlFor='password'>Password</FormLabel>
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
                  type='submit'
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500'
                  }}
                >
                Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                Not a user?{' '}
                  <Link as={NextLink} color={'blue.400'} href='/new-user'>
                  Signup
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginReq;
