import { LinkBox, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
type Props = {
  page: string;
  route: string;
};

export const NavbarLink = ({ page, route }: Props) => {
  const router = useRouter();
  const isActive = router.asPath === `/${route}`;
  const style: string = isActive ? 'nav-active' : '';
  return (
    <LinkBox margin={"10px"} className={style}>
      <Link href={`/${route}`} as={NextLink} className="nav-link">
        {page}
      </Link>
    </LinkBox>
  );
};
