import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { FC, ReactElement, useState } from "react";

interface BmiProps {
  weight: number;
  height: number;
}

export const BmiCalc: FC = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const handleSubmit = ({ weight, height }: BmiProps): void => {
    const ht = Math.pow(height, 2);
    const bmiValue = (weight / ht) * 703;
    setBmi(bmiValue);
    //setBmi((weight / ht) * 703);
  };
  // weight * .45 = kg, height * .025 = m
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Calculate BMI (Body Mass Index)
        </Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Formik
              initialValues={{
                weight: null,
                height: null,
              }}
              onSubmit={(values): void => {
                const variables = {
                  weight: values.weight ?? 0,
                  height: values.height ?? 0,
                };
                handleSubmit(variables);
              }}
            >
              {({ handleSubmit }): ReactElement => (
                <form onSubmit={handleSubmit}>
                  <HStack>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel htmlFor="weight">Weight (lbs)</FormLabel>
                        <Field
                          as={Input}
                          type="text"
                          id="weight"
                          name="weight"
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl isRequired>
                        <FormLabel htmlFor="height">Height (in)</FormLabel>
                        <Field
                          as={Input}
                          type="text"
                          id="height"
                          name="height"
                        />
                      </FormControl>
                    </Box>
                  </HStack>
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
          </Stack>
          {bmi ? (
            <Center pt={10}>
              <Text as={Heading} size="md">
                Your BMI: {bmi.toFixed(2)}
              </Text>
            </Center>
          ) : (
            <></>
          )}
        </Box>
      </Stack>
    </Flex>
  );
};
