import { Button, Link } from "@chakra-ui/react";
import { SelectedPage } from "./types";
import React from "react";
import { useRouter } from "next/router";
import { Url } from "next/dist/shared/lib/router/router";
type Props = {
  buttonText: string;
  routingPath: Url;
  colorScheme?: string;
};

export const RouteButton = ({
  buttonText,
  routingPath,
  colorScheme = "green",
}: Props) => {
  const route = useRouter();
  return (
    <Button
      colorScheme={colorScheme}
      onClick={(): void => {
        route.push(routingPath);
      }}
      marginRight="5px"
      marginBottom={"20px"}
    >
      {buttonText}
    </Button>
  );
};
