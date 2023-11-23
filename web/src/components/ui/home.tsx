import {
  Flex,
  Heading,
  Stack,
  HStack,
  Spacer,
  Center,
  Button,
  Box
} from '@chakra-ui/react';
import { FC } from 'react';
import { PicCard } from './pictureCard';
import { useRouter } from 'next/router';

export const Home: FC = () => {
  const router = useRouter();
  return (
    <Box height={'90vh'}>
      <Flex
        justifyContent="center" // Center horizontally
        alignItems="center" // Center vertically
      >
        <Stack spacing={2} align="center" pt={4}>
          <Heading as="h3" size="md">
            Welcome to
          </Heading>
          <Heading as="h1">ByteBite Tracker</Heading>
        </Stack>
      </Flex>
      <HStack justifyContent="center" alignItems="top" p="2em">
        <Spacer />
        <PicCard
          img={'images/pexels-lukas-669623.jpg'}
          alt={'nutrition'}
          heading={'Graphical Insights for Nutritional Success'}
        >
          {`At ByteBite, we understand that achieving your nutritional goals
          requires more than just logging your meals and activities. It's about
          gaining valuable insights and visualizing your progress towards a
          healthier you. That's why we employ the power of graphs to
          revolutionize the way you track your nutrition and wellness journey.`}
        </PicCard>
        <Spacer />
        <PicCard
          img={'images/pexels-pixabay-220301.jpg'}
          alt={'calc'}
          heading={'Seamless Nutritional Calculations for Your Convenience'}
        >
          {`At ByteBite, we believe in making nutrition tracking as effortless as
          possible for our users. Our platform is designed to handle all the
          complex calculations, ensuring that you have accurate and up-to-date
          nutritional information at your fingertips.`}
        </PicCard>
        <Spacer />
        <PicCard
          img={'images/pexels-kate-trifo-4024914.jpg'}
          alt={'activity'}
          heading={'Focus on your acvitity while we do the work for you'}
        >
          {`At ByteBite, we understand that achieving your health and fitness
          goals isn't just about what you eat but also how you move. Once your
          done putting in your daily food intake, WE DO ALL THE WORK FOR YOU!
          Saving you more time to put towards any other focus towards your goal
          of a healthy lifestyle.`}
        </PicCard>
        <Spacer />
      </HStack>
      <Center>
        <Button
          size={'lg'}
          colorScheme="teal"
          onClick={(): Promise<boolean> => router.push('/new-user')}
          data-testid='join-button'
        >
          Join Now
        </Button>

      </Center>
    </Box>
  );
};

export default Home;
