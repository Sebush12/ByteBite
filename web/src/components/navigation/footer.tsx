import { FC } from "react";
import {
  Box,
  Container,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const Footer: FC = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        p={2}
        pl={16}
        pr={16}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link as={NextLink} href="/" data-testid="home-link">
            Home
          </Link>
          <Text>|</Text>
          <Link as={NextLink} href="/about" data-testid="about-link">
            About
          </Link>
          <Text>|</Text>
          <Link as={NextLink} href="/contact" data-testid="contact-link">
            Contact Us
          </Link>
        </Stack>
        <Spacer />
        <Text data-testid="copyright">© 2023 ByteBite Tracker. No rights reserved</Text>
      </Container>
    </Box>
  );
};
