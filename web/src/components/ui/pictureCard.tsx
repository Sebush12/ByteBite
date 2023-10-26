import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export interface PicCardProps extends PropsWithChildren {
  alt: string;
  img: string;
  heading: string;
}

export const PicCard: FC<PicCardProps> = ({ alt, children, heading, img }) => {
  return (
    <Card maxW="md">
      <CardBody>
        <Image
          src={img}
          alt={alt}
          borderRadius="lg"
          boxSize="25em"
          align="center"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{heading}</Heading>
          <Text>{children}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
