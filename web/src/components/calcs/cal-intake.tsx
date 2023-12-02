import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { FC, ReactElement, useState } from "react";

interface CalorieCalcProps {
  setBmr: Function;
}
interface CalorieProps {
  weight: number;
  height: number;
  age: number;
  gender: string;
}

export const CalorieCalc: FC<CalorieCalcProps> = ({ setBmr }) => {
  const [localBmr, setLocalBmr] = useState(0);
  const [showBmr, setShowBmr] = useState(false);
  const handleSubmit = ({
    weight,
    height,
    age,
    gender,
  }: CalorieProps): void => {
    // Convert weight to kg and height to cm
    const weightInKg = weight * 0.453592; // 1 lb = 0.453592 kg
    const heightInCm = height * 2.54; // 1 in = 2.54 cm

    let bmrValue = 0;
    if (gender.toLowerCase() === "male") {
      bmrValue = 66.5 + 13.75 * weightInKg + 5.003 * heightInCm - 6.775 * age;
    } else if (gender.toLowerCase() === "female") {
      bmrValue = 655.1 + 9.563 * weightInKg + 1.85 * heightInCm - 4.676 * age;
    }

    setLocalBmr(bmrValue);
    setBmr(bmrValue);
    setShowBmr(true);
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Calculate BMR (Basal Metabolic Rate)
        </Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Formik
            initialValues={{
              weight: null,
              height: null,
              age: null,
              gender: "",
            }}
            onSubmit={(values): void => {
              const variables = {
                weight: values.weight ?? 0,
                height: values.height ?? 0,
                age: values.age ?? 0,
                gender: values.gender || "Male",
              };
              handleSubmit(variables);
            }}
          >
            {({ handleSubmit }): ReactElement => (
              <form onSubmit={handleSubmit}>
                <Alert status="info">
                  <AlertIcon />
                  Please put in your goal weight for these calculations
                </Alert>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel paddingTop="10px" htmlFor="weight">
                      Weight (lbs)
                    </FormLabel>
                    <Field as={Input} type="text" id="weight" name="weight" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="height">Height (in)</FormLabel>
                    <Field as={Input} type="text" id="height" name="height" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="age">Age</FormLabel>
                    <Field as={Input} type="text" id="age" name="age" />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel htmlFor="gender">Gender</FormLabel>
                    <Field as={Select} id="gender" name="gender">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Field>
                  </FormControl>
                </Stack>
                <Stack spacing={10} pt={8}>
                  <Button
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{ bg: "blue.500" }}
                    type="submit"
                  >
                    Calculate
                  </Button>
                </Stack>
              </form>
            )}
          </Formik>
          {showBmr && (
            <Center pt={10} flexDirection="column" alignItems="center">
              <Text as={Heading} size="md" mb={2}>
                Your BMR: {localBmr.toFixed(2)}
              </Text>
              <Box textAlign="center">
                <Text fontSize="sm" color="gray.500">
                  (Calories per day)
                </Text>
              </Box>
            </Center>
          )}
        </Box>
      </Stack>
    </Flex>
  );
};
