import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import { FC } from 'react';
import { ProgessCard } from './progress-card';
import { UpdateSect } from './update-section';

export const Dashboard: FC = () => {
    const val1: number = 80;
    const val2: number = 25;
    const val3: number = 57;
    const goal: number = 100;

  return (
    <Box bg='whitesmoke' pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Heading mb='1em' size='xl' textAlign='center'>Your Progress</Heading> 
    <SimpleGrid
      columns={3}
      >
        <ProgessCard title='Daily Calories' value={val1} goal={goal} color='purple.400'/>
        <ProgessCard title='Daily Exercise' value={val2} goal={goal} color='green.400'/>
        <ProgessCard title='Weight Gaol' value={val3} goal={goal} color='orange.400'/>
    </SimpleGrid>
    <UpdateSect>
      {/* Add update section here */}
     <Heading size='2xl'> Add Update Area </Heading>
    </UpdateSect>
    
  </Box>
  )
}

export default Dashboard;
