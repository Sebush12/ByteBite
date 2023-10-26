import { Box,Center, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export interface PicCardProps extends PropsWithChildren {
  alt: string;
  img: string;
  heading: string;
}

export const PicCard: FC<PicCardProps> = ({ alt, children, heading, img }) => {
  return (
    <Center py={6}>
    <Box
      maxW={'445px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.600')}
      boxShadow={'2xl'}
      rounded={'md'}
      minH={'33em'}
      p={6}
      overflow={'hidden'}>
      <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
        <Image
          src={img}
          alt={alt}
          boxSize="full"
        />
      </Box>
      <Stack>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}>
          {heading}
        </Heading>
        <Text color={useColorModeValue('gray.500', 'gray.200')}>
          {children}
        </Text>
      </Stack>
    </Box>
  </Center>
  );
};
