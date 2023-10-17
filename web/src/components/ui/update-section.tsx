import { Card, CardBody, CardHeader, Center, Heading } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

export const UpdateSect:FC<PropsWithChildren> = ({
  children
}) => {
  return (
    <Center mt='2em'>
      <Card align='center' minW='100em'>
        <CardHeader> 
          <Heading>Update Your Progress</Heading>
        </CardHeader>
        <CardBody>
          {children}
        </CardBody>
      </Card>
    </Center>
  )
}

export default UpdateSect;
