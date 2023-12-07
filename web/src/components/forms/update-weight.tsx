import { graphql } from '@/gql';
import { useMutation  } from 'urql';
import {FC} from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import {FormikHelpers, useFormik} from 'formik';
import { useSession } from 'next-auth/react';

const UPDATE_WEIGHT = graphql(`
  mutation UpdateWeight(
    $email: String!
    $weight: Float!
  ) {
    updateUsersInfo(
      email: $email
      weight: $weight
      age: null 
      dailyCalories: null 
      gender: null 
      goalWeight: null
      height: null
    ) {
      usersInfo {
        weight
      }
    }
  }
`);

export const UpdateWeight: FC = () => {
  const { data: sessionData } = useSession();
  const userEmail = sessionData?.user?.email;
  const toast = useToast();
  const [ , updateWeight] = useMutation(UPDATE_WEIGHT);

  const handleCreate = async (
    {newWeight}: {newWeight: number;},
    { resetForm }: FormikHelpers<any> ): Promise<void>  => {

    const variables = {
      email: userEmail ?? '',
      weight: newWeight
    };

    // Execute the mutation
    const response = await updateWeight(variables);

    if (response.error) {
      // Handle the error
      console.error('Error: ', response.error);
      toast({
        title: 'Error',
        description: 'There was an error updating your weight.',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    } else {
      // Success! Handle the response
      resetForm();
      toast({
        position: 'top',
        title: 'Success',
        description: 'Weight Successfully Updated!',
        status: 'success',
        duration: 9000,
        isClosable: true
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      newWeight: 0
    },
    onSubmit: (values, formikBag) => {
      handleCreate(values, formikBag);
    }
  });

  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Update Your Weight
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
              <Box>
                <FormControl isRequired>
                  <FormLabel htmlFor="newWeight">New Weight</FormLabel>
                  <Input
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.newWeight}
                    id="newWeight"
                    name="newWeight"
                  />
                </FormControl>
              </Box>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Updating Weight..."
                  size="lg"
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500'
                  }}
                  type="submit"
                >
                  Update
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default UpdateWeight;
