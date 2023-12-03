import {
  Box,
  Heading,
  SimpleGrid,
  Skeleton,
  useColorModeValue
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { ProgessCard } from './progress-card';
import { UpdateSect } from './update-section';
import { graphql } from '@/gql';
import { gql, useQuery } from 'urql';
import { useSession } from 'next-auth/react';

const USER_INFO = graphql(`
query UserInfo(email: String!) 
{
  userInfoByEmail(email: $email) 
  {
    age
    dailyCalories
    gender
    goalWeight
    height
    weight
  }
}
`);

export const Dashboard: FC = () => {
  const USER_INFO = gql`
    query UserInfo($email: String!) {
      userInfoByEmail(email: $email) {
        age
        dailyCalories
        gender
        goalWeight
        height
        weight
        exercises {
          workoutTime
          caloriesConsumed
        }
        userfoodlogSet {
          foodItem {
            calories
          }
          servings
        }
      }
    }
  `;


  const { data: sessionData } = useSession();
  const userEmail = sessionData?.user?.email;

  const [loading, setLoading] = useState(false);
  const [totalCals, setTotalCals] = useState(0);

  const [{ data, fetching }] = useQuery({
    query: USER_INFO,
    variables: { email: userEmail },
    pause: !userEmail
  });

  useEffect(() => {
    if (userEmail) {
      setLoading(true);
      // Fetch the data
      // In this case, the useQuery hook is already fetching the data
      // So we just need to handle the response
      if (!fetching) {
        if(data.userInfoByEmail.userfoodlogSet) {
          setTotalCals(data.userInfoByEmail.userfoodlogSet
            .reduce((total, item) => {return total + item?.foodItem.calories * item.servings;}, 0));
        }
        setLoading(false);
      }
    }
  }, [userEmail, data, fetching]);

  console.log(data?.userInfoByEmail, totalCals);
  return (
    <Box
      bg={useColorModeValue('gray.200', 'black.200')}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
    >
      <Heading mb="1em" size="xl" textAlign="center">
        Your Progress
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        <Skeleton startColor='purple.400' endColor='green.400' p={5} isLoaded={!loading}>
          <ProgessCard
            title="Daily Calories"
            value={totalCals ?? 0}
            goal={data?.userInfoByEmail.dailyCalories ?? 0}
            color="purple.400"
          />
        </Skeleton>
        <Skeleton startColor='green.400' endColor='orange.400' p={5} isLoaded={!loading}>
          <ProgessCard
            title="Daily Exercise"
            value={/*data?.userInfoByEmail.excercises.workoutTime*/ 0}
            goal={0}
            color="green.400"
          />
        </Skeleton>
        <Skeleton startColor='orange.400' endColor='purple.400' p={5} isLoaded={!loading}>
          <ProgessCard
            title="Weight Goal"
            value={data?.userInfoByEmail.weight ?? 0}
            goal={data?.userInfoByEmail.goalWeight ?? 0}
            color="orange.400"
          />
        </Skeleton>
      </SimpleGrid>
      <UpdateSect />
    </Box>
  );
};

export default Dashboard;
