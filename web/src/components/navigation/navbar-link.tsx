import { LinkBox, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
interface Props {
  page: string;
  route: string;
}

export const NavbarLink: FC<Props> = ({ page, route }) => {
  const router = useRouter();
  const isActive = router.asPath === `/${route}`;
  const style: string = isActive ? 'nav-active' : '';
  return (
    <LinkBox margin={'10px'} className={style}>
      <Link href={`/${route}`} as={NextLink} className="nav-link">
        {page}
      </Link>
    </LinkBox>
  );
};
