import AddUser from '@/components/stepper-items/create-user';
import UserDetails from '@/components/stepper-items/user-details';
import { graphql } from '@/gql';
import { MutationCreateUserArgs } from '@/gql/graphql';
import {
  Box,
  Flex,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper,
  useSteps,
  useToast} from '@chakra-ui/react';
import { StepDescription, StepTitle } from '@chakra-ui/stepper';
import { signIn } from 'next-auth/react';
import { FC } from 'react';
import { useMutation } from 'urql';

const steps = [
  { title: 'First', description: 'Contact Info' },
  { title: 'Second', description: 'Details' }
];

const CREATE_USER = graphql(`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    createUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, username: $email) {
      user {
        email
        firstName
        lastName
        username
      }
    }
  }
`);

// const CREATE_USER_DETAILS = graphql(`
//   mutation CreateUserDetails($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
//     createUser(email: $email, firstName: $firstName, lastName: $lastName, password: $password, username: $email) {
//       user {
//       info {
//         age
//         height
//         weight
//       }
//     }
//   }
// }
// `);

export const NewUser: FC = () => {
  const [ , createUser] = useMutation(CREATE_USER);
  const toast = useToast();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length
  });
  const newUser = {
    email: '',
    password: ''
  };

  const handleAddUser = async (
    {
      firstName,
      lastName,
      email,
      password
    }: MutationCreateUserArgs): Promise<any> => {
    // Execute the mutation
    const response = await createUser(
      {
        //gql mutation name: form value
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      });

    if (response.error) {
      // Handle the error
      console.error('Error: ', response.error);
      toast({
        title: 'Error',
        description: 'Something Went Wrong',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    } else {
      setActiveStep(1);
    }
  };

  const handleUserDetails = async (
    {
      gender,
      age,
      height,
      weight
    }: UserDetailProps): Promise<any> => {
    // Execute the mutation
    const response = await createUserDetails(
      {
        //gql mutation name: form value
        gender: gender,
        age: age,
        height: height,
        weight: weight
      });

    if (response.error) {
      // Handle the error
      console.error('Error: ', response.error);
      toast({
        title: 'Error',
        description: 'Something Went Wrong',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    } else {
      await signIn('credentials', {
        email: newUser.email,
        password: newUser.password,
        redirect: false
      });
    }
  };


  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} py={12} px={6}>
        <Stepper size='sm' index={activeStep} gap='0'>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <Box flexShrink='0'>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 ?
          <AddUser handleAddUser={handleAddUser} /> :
          <UserDetails handleUserDetails={handleUserDetails} />
        }
      </Stack>
    </Flex>
  );
};

export default NewUser;
