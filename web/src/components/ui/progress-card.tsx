import { Card, CardBody, CardFooter, CardHeader, Center, CircularProgress, CircularProgressLabel, Heading } from "@chakra-ui/react";
import { FC } from "react";

export interface ProgressCardProps {
  title: string;
  value: number;
  goal: number;
  color: string;
}

export const ProgessCard:FC<ProgressCardProps> = ({
  title,
  value,
  goal,
  color
}) => {
  return (
    <Center>
          <Card align='center'>
            <CardHeader>
              <Heading size='lg'> {title} </Heading>
            </CardHeader>
            <CardBody>
              <Heading size='md'>{value}/{goal}</Heading>
            </CardBody>
            <CardFooter>
              <CircularProgress value={(value/goal) * 100} color={color} size='5em' thickness='4px'>
                <CircularProgressLabel>{value}%<br/></CircularProgressLabel>
              </CircularProgress>
            </CardFooter>
          </Card>
        </Center>
  )
}

export default ProgessCard;
