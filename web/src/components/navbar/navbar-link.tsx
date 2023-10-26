import { Box, LinkBox, Link } from "@chakra-ui/react";
import NextLink from "next/link";
type Props = {
  page: string;
  route: string;
};

export const NavbarLink = ({ page, route }: Props) => {
  return (
    <LinkBox margin={"10px"}>
      <Link href={`/${route}`} as={NextLink}>
        {page}
      </Link>
    </LinkBox>
  );
};
