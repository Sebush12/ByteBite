import { graphql } from '@/gql';
import { useMutation, useQuery  } from 'urql';
import {FC, ReactElement, useState} from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import {Field, Formik, FormikHelpers} from 'formik';
import { useSession } from 'next-auth/react';
import { MutationCreateUserFoodLogArgs } from '@/gql/graphql';
import { useRouter } from 'next/router';

const GET_FOOD = graphql(`
    query GetFood {
      allFoodItems {
        calories
        carbs
        fat
        name
        protein
      }
    }
  `);

const UPDATE_CALS = graphql(`
  mutation UpdateCals(
    $date: Date!
    $foodItemName: String!
    $servings: Int!
    $userId: ID!
  ) {
    createUserFoodLog(
      date: $date
      foodItemName: $foodItemName
      servings: $servings
      userId: $userId
    ) {
      userFoodLog {
        date
        id
        servings
      }
    }
  }
`);

interface FoodItem {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

export const UpdateCalories: FC = () => {
  const [{ data }] = useQuery({ query: GET_FOOD});
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>([]);
  const { data: sessionData } = useSession();
  const id = sessionData?.user?.id ?? null;
  const toast = useToast();
  const [ , updateCals] = useMutation(UPDATE_CALS);
  const router = useRouter();

  const getCurrentDate = (): string => {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    const inputValue = event.target.value;
    const foodItems = (data?.allFoodItems) ? data?.allFoodItems : [];
    const filtered = foodItems
      .filter((item): item is FoodItem => item !== null && item.name.toLowerCase().includes(inputValue.toLowerCase()))
      .slice(0, 5);
    setFilteredItems(filtered);
  };

  const handleItemClick = (
    itemName: string,
    setFieldValue: FormikHelpers<MutationCreateUserFoodLogArgs>['setFieldValue']): void => {
    setFieldValue('selectedItem', itemName);
    setFilteredItems([]);
  };

  const handleUpdate = async (
    {date, foodItemName, servings, userId}: MutationCreateUserFoodLogArgs,
    { resetForm }: FormikHelpers<any> ): Promise<void>  => {

    const variables = {
      date,
      foodItemName,
      servings,
      userId
    };

    // Execute the mutation
    const response = await updateCals(variables);

    if (response.error) {
      // Handle the error
      console.error('Error: ', response.error);
      toast({
        title: 'Error',
        description: 'There was an error.',
        status: 'error',
        duration: 9000,
        isClosable: true
      });
    } else {
      // Success! Handle the response
      resetForm();
      toast({
        position: 'top',
        title: 'Success',
        description: 'Calories Successfully Updated!',
        status: 'success',
        duration: 9000,
        isClosable: true
      });
      router.reload();
    }
  };

  return (
    <Flex align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Update Your Calories
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Formik
            initialValues={{selectedItem: '', servings: 0}}
            onSubmit={(values, formikBag): void => {
              const variables = {
                date: getCurrentDate(),
                foodItemName: values.selectedItem,
                servings: values.servings,
                userId: id
              };
              handleUpdate(variables, formikBag);
            }}
          >
            {({values, setFieldValue, handleChange, handleSubmit}):ReactElement => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel htmlFor="servings">Servings</FormLabel>
                      <Field
                        as={Input}
                        type="number"
                        onChange={handleChange}
                        value={values.servings}
                        id="servings"
                        name="servings"
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl isRequired>
                      <FormLabel htmlFor="selectedItem">Food Type</FormLabel>
                      <Field
                        as={Input}
                        type="text"
                        onChange={(e: { target: { value: any; }; }): void => {
                          handleInputChange(e);
                          setFieldValue('selectedItem', e.target.value);
                        }}
                        value={values.selectedItem}
                        id="selectedItem"
                        name="selectedItem"
                      />
                      {values.selectedItem === '' ?
                        <></> :
                        <ul>
                          {filteredItems.map((foodItem: FoodItem, index: number) => (
                            <li key={index} onClick={(): void => handleItemClick(foodItem.name, setFieldValue)}>
                              Name: {foodItem.name} | Calories: {foodItem.calories}
                            </li>
                          ))}
                        </ul>}

                    </FormControl>
                  </Box>

                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Updating Weight..."
                      size="lg"
                      bg={'green.400'}
                      color={'white'}
                      _hover={{
                        bg: 'green.500'
                      }}
                      type="submit"
                    >
                  Update
                    </Button>
                  </Stack>
                </Stack>
              </form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
};

export default UpdateCalories;
