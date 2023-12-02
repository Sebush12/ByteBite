import {
  Box,
  Heading,
  SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react';
import { FC } from 'react';
import { ProgessCard } from './progress-card';
import { UpdateSect } from './update-section';

export const Dashboard: FC = () => {
  const val1: number = 80;
  const val2: number = 25;
  const val3: number = 57;
  const goal: number = 100;

  return (
    <Box
      bg={useColorModeValue('gray.200', 'black.200')}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
    >
      <Heading mb="1em" size="xl" textAlign="center">
        Your Progress
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        <ProgessCard
          title="Daily Calories"
          value={val1}
          goal={goal}
          color="purple.400"
        />
        <ProgessCard
          title="Daily Exercise"
          value={val2}
          goal={goal}
          color="green.400"
        />
        <ProgessCard
          title="Weight Goal"
          value={val3}
          goal={goal}
          color="orange.400"
        />
      </SimpleGrid>
      <UpdateSect />
    </Box>
  );
};

export default Dashboard;
