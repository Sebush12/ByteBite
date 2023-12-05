import { graphql } from "@/gql";

import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  SimpleGrid,
  Select,
  Input,
  CardFooter,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import React, { useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "urql";
import { useSession } from "next-auth/react";

const UPDATE_SETTINGS = graphql(`
  mutation UpdateUserSettings(
    $email: String!
    $age: Int!
    $dailyCalories: Int!
    $gender: String!
    $goalWeight: Float!
    $height: Int!
    $weight: Float!
  ) {
    updateUsersInfo(
      email: $email
      age: $age
      dailyCalories: $dailyCalories
      gender: $gender
      goalWeight: $goalWeight
      height: $height
      weight: $weight
    ) {
      usersInfo {
        age
        dailyCalories
        gender
        goalWeight
        height
        weight
      }
    }
  }
`);

const USER_INFO = gql`
  query UserProfileInfo($email: String!) {
    userInfoByEmail(email: $email) {
      age
      dailyCalories
      gender
      goalWeight
      height
      weight
    }
  }
`;

export const ProfileSettings = () => {
  const { data: sessionData } = useSession();
  const userEmail = sessionData?.user?.email;

  const [loading, setLoading] = useState(false);

  const [{ data, fetching }] = useQuery({
    query: USER_INFO,
    variables: { email: userEmail },
    pause: !userEmail,
  });
  const [editMode, setEditMode] = useState(false);
  const [, updateSettings] = useMutation(UPDATE_SETTINGS);

  useEffect(() => {
    if (userEmail) {
      setLoading(true);

      if (!fetching) {
        setLoading(false);
      }
    }
  }, [userEmail, data, fetching]);

  const handleCreate = async ({
    age,
    goalWeight,
    gender,
    weight,
    height,
    dailyCalories,
  }: any): Promise<void> => {
    // Define the variables for your mutation
    const variables = {
      email: userEmail ?? "",
      age,
      dailyCalories,
      gender,
      goalWeight,
      height,
      weight,
    };
    setEditMode(false);

    // Execute the mutation
    const response = await updateSettings(variables);
    if (response.error) {
      console.error(response.error);
    } else {
      console.log("Success");
    }
  };

  const formik = useFormik({
    initialValues: {
      dailyCalories: data?.userInfoByEmail?.dailyCalories || 0,
      gender: data?.userInfoByEmail?.gender || "",
      weight: data?.userInfoByEmail?.weight || 0,
      goalWeight: parseInt(data?.userInfoByEmail?.goalWeight) || 0,
      height: data?.userInfoByEmail?.height || 0,
      age: data?.userInfoByEmail?.age || 0,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      handleCreate(values);
    },
  });

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Profile Settings</Heading>
      </CardHeader>
      <CardBody>
        <form onSubmit={formik.handleSubmit} id="profile-settings-form">
          <SimpleGrid columns={2} spacing={4}>
            <>
              <Box>
                <Text as="b">Gender</Text>
                <Select
                  id="gender"
                  name="gender"
                  isDisabled={!editMode}
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  placeholder="Select option"
                  size="sm"
                >
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                </Select>
              </Box>
              <Box>
                <Text as="b">Caloric Goal</Text>
                <Input
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.dailyCalories}
                  variant="outline"
                  id="dailyCalories"
                  name="dailyCalories"
                  placeholder="Calorie Goal"
                  isDisabled={!editMode}
                />
              </Box>
              <Box>
                <Text as="b">Weight (lbs)</Text>

                <Input
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.weight}
                  id="weight"
                  name="weight"
                  placeholder="Your Weight"
                  isDisabled={!editMode}
                />
              </Box>
              <Box>
                <Text as="b">Weight Goal (lbs)</Text>

                <Input
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.goalWeight}
                  id="goalWeight"
                  name="goalWeight"
                  placeholder="Your Weight Goal"
                  isDisabled={!editMode}
                />
              </Box>
              <Box>
                <Text as="b">Height (In)</Text>

                <Input
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.height}
                  id="height"
                  name="height"
                  placeholder="Your Height"
                  isDisabled={!editMode}
                />
              </Box>
              <Box>
                <Text as="b">Age</Text>

                <Input
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                  id="age"
                  name="age"
                  placeholder="Age"
                  isDisabled={!editMode}
                />
              </Box>
            </>
          </SimpleGrid>
        </form>
      </CardBody>

      <CardFooter>
        {editMode ? (
          <Button type="submit" form="profile-settings-form">
            Save
          </Button>
        ) : (
          <Button
            type="button"
            onClick={(e): void => {
              e.preventDefault();
              setEditMode(true);
            }}
          >
            Edit
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
