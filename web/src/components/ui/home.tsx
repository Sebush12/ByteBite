import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";

export const Home: FC = () => {
  const route = useRouter();
  return (
    <Box bg='facebook.700' minH='900px' color='white'>
      <HStack spacing='30px' pt='5rem'>
        <Box
          boxSize='md'
        >
          <Image
            borderRadius='100px'
            boxSize='300px'
            src='/next.svg'
            alt='food'
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquam rerum beatae alias ullam distinctio, rem aspernatur nam dignissimos? Delectus molestiae ab quisquam repellat quo vel beatae, molestias incidunt ea?
          </Text>
        </Box>
        <Box
          boxSize='md'
        >
          <Image
            borderRadius='100px'
            boxSize='300px'
            src='/vercel.svg'
            alt='weights' 
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquam rerum beatae alias ullam distinctio, rem aspernatur nam dignissimos? Delectus molestiae ab quisquam repellat quo vel beatae, molestias incidunt ea?
          </Text>
        </Box>
        <Box
          boxSize='md'
        >
          <Image
            borderRadius='100px'
            objectFit='cover'
            boxSize='300px'
            src='/next.svg'
            alt='heart' 
          />
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquam rerum beatae alias ullam distinctio, rem aspernatur nam dignissimos? Delectus molestiae ab quisquam repellat quo vel beatae, molestias incidunt ea?
          </Text>
        </Box>
      </HStack>
      <VStack pt='3rem'>
          <Button colorScheme='blue' onClick={(): void => {
            route.push('./create_user');
          } }>
            Sign Up Now
          </Button>
        </VStack>
      </Box>
  )
}

export default Home;
