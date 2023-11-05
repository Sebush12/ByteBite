import { Button } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Url } from 'next/dist/shared/lib/router/router';
interface Props {
  buttonText: string;
  routingPath: Url;
  colorScheme?: string;
}

export const RouteButton: FC<Props> = ({
  buttonText,
  routingPath,
  colorScheme = 'green'
}) => {
  const route = useRouter();
  return (
    <Button
      colorScheme={colorScheme}
      onClick={(): void => {
        route.push(routingPath);
      }}
      marginRight="5px"
      marginBottom={'20px'}
    >
      {buttonText}
    </Button>
  );
};
