import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  Text,
  VStack,
  Select,
  Heading,
} from "@chakra-ui/react";

const CalorieIntakeCalculator: React.FC = () => {
  const [weightInPounds, setWeightInPounds] = useState<number | string>("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [goal, setGoal] = useState("maintenance");
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    if (weightInPounds) {
      const weight = Number(weightInPounds);
      let caloriesValue = 0;

      if (goal === "weightLoss") {
        caloriesValue = weight * 12;
      } else if (goal === "maintenance") {
        caloriesValue = weight * 15;
      } else if (goal === "weightGain") {
        caloriesValue = weight * 18;
      }

      if (activityLevel === "sedentary") {
        caloriesValue *= 1.2;
      } else if (activityLevel === "lightlyActive") {
        caloriesValue *= 1.375;
      } else if (activityLevel === "moderatelyActive") {
        caloriesValue *= 1.55;
      } else if (activityLevel === "veryActive") {
        caloriesValue *= 1.725;
      }

      setCalories(caloriesValue);
    } else {
      setCalories(null);
    }
  };

  const [feet, setFeet] = useState<number | string>("");
  const [inches, setInches] = useState<number | string>("");
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    if (weightInPounds && feet && inches) {
      const weight = Number(weightInPounds);
      const height = Number(feet) * 12 + Number(inches);

      if (weight > 0 && height > 0) {
        const bmiValue = (weight / (height * height)) * 703;
        setBMI(bmiValue);
      } else {
        setBMI(null);
      }
    } else {
      setBMI(null);
    }
  };

  return (
    <VStack spacing={6} align="center">
      <Heading as="h1" pt="20px">
        Calorie Intake Calculator
      </Heading>
      <Box>
        <Select value={goal} onChange={(e) => setGoal(e.target.value)} mb={2}>
          <option value="weightLoss">Weight Loss</option>
          <option value="maintenance">Maintenance</option>
          <option value="weightGain">Weight Gain</option>
        </Select>
        <Input
          type="number"
          placeholder="Current Weight (lbs)"
          value={weightInPounds}
          onChange={(e) => setWeightInPounds(e.target.value)}
          mb={2}
        />
        <Select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          mb={2}
        >
          <option value="sedentary">Sedentary</option>
          <option value="lightlyActive">Lightly Active</option>
          <option value="moderatelyActive">Moderately Active</option>
          <option value="veryActive">Very Active</option>
        </Select>
        <Button colorScheme="green" onClick={calculateCalories}>
          Calculate Calories
        </Button>
        {calories !== null && (
          <Text>
            Your Daily Calories Intake: {calories.toFixed(2)} calories
          </Text>
        )}
      </Box>
      <Text fontSize="xl">BMI Calculator</Text>
      <Stack direction="row" spacing={4}>
        <Input
          type="number"
          placeholder="Weight (lbs)"
          value={weightInPounds}
          onChange={(e) => setWeightInPounds(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Feet"
          value={feet}
          onChange={(e) => setFeet(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Inches"
          value={inches}
          onChange={(e) => setInches(e.target.value)}
        />
      </Stack>
      <Button colorScheme="blue" onClick={calculateBMI}>
        Calculate BMI
      </Button>
      {bmi !== null && <Text>Your BMI: {bmi.toFixed(2)}</Text>}
    </VStack>
  );
};

export default CalorieIntakeCalculator;
