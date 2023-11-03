import { graphql } from '@/gql';
import { useMutation,  } from "urql";
import {FC} from "react";
import {MutationCreateFoodItemArgs} from "@/gql/graphql";

const MAKE_ITEM = graphql(`
  mutation CreateFoodItem($calories: Int!, $carbs: Decimal!, $fat: Decimal!, $name: String!, $protein: Decimal!) {
  createFoodItem(calories: $calories, carbs: $carbs, fat: $fat, name: $name, protein: $protein) {
    foodItem {
      calories
      carbs
      fat
      name
      protein
    }
  }
}
`);

export const Food: FC = () => {
  const [result, createItem] = useMutation(MAKE_ITEM);
  const handleCreate = async ({calories, carbs, fat, name, protein }:MutationCreateFoodItemArgs )  => {
    // Define the variables for your mutation
    const variables = {
      calories: calories,
      carbs: carbs,
      fat:  fat,
      name: name,
      protein: protein
    };

    // Execute the mutation
    const response = await createItem(variables);

    if (response.error) {
      // Handle the error
      console.error('Oh no!', response.error);
    } else {
      // Success! Handle the response
      console.log('Item created', response.data?.createFoodItem);
    }
  };
  return (
    <>
      <button onClick={() => handleCreate({
        calories: 230,
        carbs: 35.7,
        fat: 96.03,
        name: "pudding",
        protein: 0.5
      }  )}>Create Item</button>
    </>
  )
}

export default Food;




