import AddUser from "@/components/stepper-items/create-user";
import UserDetails from "@/components/stepper-items/user-details";
import { graphql } from "@/gql";
import {
  MutationCreateUserArgs,
  MutationCreateUsersInfoArgs,
} from "@/gql/graphql";
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
  useToast,
} from "@chakra-ui/react";
import { StepDescription, StepTitle } from "@chakra-ui/stepper";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useMutation } from "urql";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Details" },
];

const CREATE_USER = graphql(`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
    $age: Int!
    $dailyCalories: Int!
    $gender: String!
    $goalWeight: Float!
    $height: Int!
    $weight: Float!
  ) {
    createUserAndInfo(
      age: $age
      dailyCalories: $dailyCalories
      email: $email
      firstName: $firstName
      gender: $gender
      goalWeight: $goalWeight
      height: $height
      lastName: $lastName
      password: $password
      username: $username
      weight: $weight
    ) {
      user {
        email
        firstName
        lastName
        username
      }
      usersInfo {
        age
        dailyCalories
        gender
        goalWeight
        height
        weight
      }
    }
  }
`);

export const NewUser: FC = () => {
  const [, createUser] = useMutation(CREATE_USER);
  const router = useRouter();
  const toast = useToast();
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const handleAddUser = ({
    firstName,
    lastName,
    email,
    password,
  }: MutationCreateUserArgs): void => {
    // Execute the mutation
    setNewUser({
      username: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    });
    setActiveStep(1);
  };

  const handleUserDetails = async ({
    age,
    dailyCalories,
    gender,
    goalWeight,
    height,
    weight,
  }: MutationCreateUsersInfoArgs): Promise<any> => {
    console.log("here");
    // Execute the mutation
    const response = await createUser({
      //gql mutation name: form value
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.username,
      password: newUser.password,
      username: newUser.username,
      age: age,
      dailyCalories: dailyCalories,
      gender: gender,
      goalWeight: goalWeight,
      height: height,
      weight: weight,
    });

    if (response.error) {
      // Handle the error
      console.error("Error: ", response.error);
      toast({
        title: "Error",
        description: "Something Went Wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      await signIn("credentials", {
        email: newUser.username,
        password: newUser.password,
        redirect: false,
      });
      router.push("/");
    }
  };

  return (
    <Flex align={"center"} justify={"center"} minHeight="90vh">
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Stepper size="sm" index={activeStep} gap="0">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus complete={<StepIcon />} />
              </StepIndicator>
              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 ? (
          <AddUser handleAddUser={handleAddUser} />
        ) : (
          <UserDetails handleUserDetails={handleUserDetails} />
        )}
      </Stack>
    </Flex>
  );
};

export default NewUser;
