import { SelectedPage } from "@/pages/shared/types";
import { LinkBox, Link } from "@chakra-ui/react";
import NextLink from "next/link";
type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const NavbarLink = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <LinkBox margin={"10px"}>
      <Link
        href={`./${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
        as={NextLink}
      >
        {page}
      </Link>
    </LinkBox>
  );
};
