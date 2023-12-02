import { Flex, Stack } from "@chakra-ui/react";
import React, { useState } from "react";

import { CalorieCalc } from "@/components/calcs/cal-intake";
import { TdeeCalc } from "@/components/calcs/tdee-calc";
import { BmiCalc } from "@/components/calcs/bmi-calc";
import { useSession } from "next-auth/react";
import LoginReq from "@/components/forms/login-required";

const CalorieIntakeCalculator: React.FC = () => {
  const { status } = useSession();
  const [bmr, setBmr] = useState<number>();
  if (status == "unauthenticated") {
    return <LoginReq />;
  }

  return (
    <Flex direction="column" minH="100vh" position="relative">
      <Flex align={"center"} justify={"center"}>
        <Stack
          spacing={4}
          p={4}
          direction={{ base: "column", md: "row" }}
          align="center"
        >
          <BmiCalc />
          <CalorieCalc setBmr={setBmr} />
          <TdeeCalc bmr={bmr || 0} />
        </Stack>
      </Flex>
    </Flex>
  );
};
export default CalorieIntakeCalculator;
