import { FC } from "react";
import { Box, Container, Link, Spacer, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Footer:FC = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        p={2}
        pl={16}
        pr={16}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Link as={NextLink} href='/'>
            Home
          </Link>
          <Link as={NextLink} href='/profile'>
            Profile
          </Link>
          <Link as={NextLink} href='/dashboard'>
            Dashboard
          </Link>
        </Stack>
        <Spacer />
        <Text>© 2023 ByteBite Tracker. No rights reserved</Text>
      </Container>
    </Box>
  )
}
