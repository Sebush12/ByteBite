import EditableControls from "@/pages/shared/edit-textbox";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  SimpleGrid,
  Select,
  Input,
  Editable,
  EditablePreview,
  EditableInput,
  CardFooter,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { FormikHelpers, useFormik } from "formik";

import React, { useState } from "react";

export const ProfileSettings = () => {
  const [editMode, setEditMode] = useState(false);
  const caloricGoal = "userCaloricGoal";
  const displayUserWeight = "Your Weight";
  const handleCreate = async (
    values: any,
    { resetForm }: FormikHelpers<any>
  ) => {
    setEditMode(false);
  };

  const formik = useFormik({
    initialValues: {
      gender: "",
      weight: "",
      goal_weight: "",
    },
    onSubmit: (values, formikBag) => {
      const parsedVals = {
        ...values,
        weight: parseInt(values.weight),
        goal_weight: parseInt(values.goal_weight),
      };
      handleCreate(parsedVals, formikBag);
    },
  });

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Profile Settings</Heading>
      </CardHeader>
      <CardBody>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
          id="profile-settings-form"
        >
          <SimpleGrid columns={2} spacing={4}>
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
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </Box>
            <Box>
              <Text as="b">Caloric Goal</Text>
              <Input value={caloricGoal} isReadOnly={true} variant="outline" />
            </Box>
            <Box>
              <Text as="b">Weight (lbs)</Text>

              <Input
                type="text"
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
                type="text"
                onChange={formik.handleChange}
                value={formik.values.goal_weight}
                id="goal_weight"
                name="goal_weight"
                placeholder="Your Weight Goal"
                isDisabled={!editMode}
              />
            </Box>
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
            onClick={(e) => {
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
