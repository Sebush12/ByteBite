import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Field, FieldProps, Formik } from "formik";
import { FC, ReactElement } from "react";

interface UserDetailProps {
  handleUserDetails: (userData: {
    age: number;
    dailyCalories: number;
    gender: string;
    goalWeight: number;
    height: number;
    weight: number;
  }) => void;
}

export const UserDetails: FC<UserDetailProps> = ({ handleUserDetails }) => {
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} py={12} px={6}>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          User Details
        </Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Formik
            initialValues={{
              age: 0,
              dailyCalories: 0,
              gender: "",
              goalWeight: 0,
              height: 0,
              weight: 0,
            }}
            onSubmit={async (values): Promise<any> => {
              handleUserDetails(values);
            }}
          >
            {({ handleSubmit }): ReactElement => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={8}>
                  <HStack spacing={20}>
                    <Box>
                      <Field name="gender">
                        {({ field }: FieldProps): ReactElement => {
                          const { onChange, ...rest } = field;
                          return (
                            <FormControl isRequired>
                              <FormLabel htmlFor="gender">Gender</FormLabel>
                              <RadioGroup {...rest} id="gender">
                                <Stack spacing={5} direction="row">
                                  <Radio
                                    colorScheme="green"
                                    onChange={onChange}
                                    value="male"
                                  >
                                    Male
                                  </Radio>
                                  <Radio
                                    colorScheme="green"
                                    onChange={onChange}
                                    value="female"
                                  >
                                    Female
                                  </Radio>
                                </Stack>
                              </RadioGroup>
                            </FormControl>
                          );
                        }}
                      </Field>
                    </Box>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel htmlFor="age">Age</FormLabel>
                        <Field
                          as={Input}
                          id="age"
                          name="age"
                          type="number"
                        ></Field>
                      </FormControl>
                    </Box>
                  </HStack>
                  <HStack spacing={6}>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel htmlFor="weight">Current Weight</FormLabel>
                        <Field
                          as={Input}
                          id="weight"
                          name="weight"
                          type="number"
                        ></Field>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel htmlFor="height">Height (In)</FormLabel>
                        <Field
                          as={Input}
                          id="height"
                          name="height"
                          type="number"
                        ></Field>
                      </FormControl>
                    </Box>
                  </HStack>
                  <HStack spacing={6}>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel htmlFor="dailyCalories">
                          Daily Calorie Goal
                        </FormLabel>
                        <Field
                          as={Input}
                          id="dailyCalories"
                          name="dailyCalories"
                          type="number"
                        ></Field>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel htmlFor="goalWeight">Goal Weight</FormLabel>
                        <Field
                          as={Input}
                          id="goalWeight"
                          name="goalWeight"
                          type="number"
                        ></Field>
                      </FormControl>
                    </Box>
                  </HStack>
                </Stack>
                <Stack pt={6}>
                  <Button
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{ bg: "blue.500" }}
                    type="submit"
                  >
                    Continue
                  </Button>
                </Stack>
              </form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
};

export default UserDetails;
