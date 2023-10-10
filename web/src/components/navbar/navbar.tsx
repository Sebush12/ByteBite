import { useState } from "react";
import Logo from "@/public/images/pexels-any-lane-5945660.jpg";
import { SelectedPage } from "@/pages/shared/types";
import { NavbarLink } from "./navbar-link";
import { RouteButton } from "@/pages/shared/route-button";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "drop-shadow";
  const route = useRouter();

  return (
    <Box paddingTop={"10px"} background={"pink"} paddingBottom={"10px"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Flex>
          <NavbarLink
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavbarLink
            page="About Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavbarLink
            page="Calculator"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <NavbarLink
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </Flex>
        <Flex
          justifyContent={{ base: "center", md: "flex-end" }}
          marginTop={{ base: "10px", md: "0" }}
        >
          <Box gap="2">
            <RouteButton buttonText="Log-in" routingPath={"./log-in"} />
            <RouteButton buttonText="Sign Up" routingPath={"./create_user"} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
