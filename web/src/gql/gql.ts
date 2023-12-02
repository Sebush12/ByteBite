/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateFoodItem(\n    $calories: Int!\n    $carbs: Decimal!\n    $fat: Decimal!\n    $name: String!\n    $protein: Decimal!\n  ) {\n    createFoodItem(\n      calories: $calories\n      carbs: $carbs\n      fat: $fat\n      name: $name\n      protein: $protein\n    ) {\n      foodItem {\n        calories\n        carbs\n        fat\n        name\n        protein\n      }\n    }\n  }\n": types.CreateFoodItemDocument,
    "\n  mutation ChangePassword(\n    $email: String!\n    $newPassword: String!\n    $oldPassword: String!    \n  ) {\n    changePassword(\n      email: $email,\n      newPassword: $newPassword,\n      oldPassword: $oldPassword\n    ) {\n      user {\n        id\n        email\n        firstName\n      }\n    }\n  }\n": types.ChangePasswordDocument,
    "\n  mutation CreateUser(\n    $firstName: String!, \n    $lastName: String!, \n    $email: String!,\n    $username: String!, \n    $password: String!,\n    $age: Int!, \n    $dailyCalories: Int!, \n    $gender: String!, \n    $goalWeight: Float!,\n    $height: Int!,\n    $weight: Float!) {\n      createUserAndInfo(\n        age: $age\n        dailyCalories: $dailyCalories\n        email: $email\n        firstName: $firstName\n        gender: $gender\n        goalWeight: $goalWeight\n        height: $height\n        lastName: $lastName\n        password: $password\n        username: $username\n        weight: $weight\n    ) {\n      user {\n        email\n        firstName\n        lastName\n        username\n      }\n      usersInfo {\n        age\n        dailyCalories\n        gender\n        goalWeight\n        height\n        weight\n      }\n    }\n  }\n": types.CreateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateFoodItem(\n    $calories: Int!\n    $carbs: Decimal!\n    $fat: Decimal!\n    $name: String!\n    $protein: Decimal!\n  ) {\n    createFoodItem(\n      calories: $calories\n      carbs: $carbs\n      fat: $fat\n      name: $name\n      protein: $protein\n    ) {\n      foodItem {\n        calories\n        carbs\n        fat\n        name\n        protein\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateFoodItem(\n    $calories: Int!\n    $carbs: Decimal!\n    $fat: Decimal!\n    $name: String!\n    $protein: Decimal!\n  ) {\n    createFoodItem(\n      calories: $calories\n      carbs: $carbs\n      fat: $fat\n      name: $name\n      protein: $protein\n    ) {\n      foodItem {\n        calories\n        carbs\n        fat\n        name\n        protein\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ChangePassword(\n    $email: String!\n    $newPassword: String!\n    $oldPassword: String!    \n  ) {\n    changePassword(\n      email: $email,\n      newPassword: $newPassword,\n      oldPassword: $oldPassword\n    ) {\n      user {\n        id\n        email\n        firstName\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation ChangePassword(\n    $email: String!\n    $newPassword: String!\n    $oldPassword: String!    \n  ) {\n    changePassword(\n      email: $email,\n      newPassword: $newPassword,\n      oldPassword: $oldPassword\n    ) {\n      user {\n        id\n        email\n        firstName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser(\n    $firstName: String!, \n    $lastName: String!, \n    $email: String!,\n    $username: String!, \n    $password: String!,\n    $age: Int!, \n    $dailyCalories: Int!, \n    $gender: String!, \n    $goalWeight: Float!,\n    $height: Int!,\n    $weight: Float!) {\n      createUserAndInfo(\n        age: $age\n        dailyCalories: $dailyCalories\n        email: $email\n        firstName: $firstName\n        gender: $gender\n        goalWeight: $goalWeight\n        height: $height\n        lastName: $lastName\n        password: $password\n        username: $username\n        weight: $weight\n    ) {\n      user {\n        email\n        firstName\n        lastName\n        username\n      }\n      usersInfo {\n        age\n        dailyCalories\n        gender\n        goalWeight\n        height\n        weight\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser(\n    $firstName: String!, \n    $lastName: String!, \n    $email: String!,\n    $username: String!, \n    $password: String!,\n    $age: Int!, \n    $dailyCalories: Int!, \n    $gender: String!, \n    $goalWeight: Float!,\n    $height: Int!,\n    $weight: Float!) {\n      createUserAndInfo(\n        age: $age\n        dailyCalories: $dailyCalories\n        email: $email\n        firstName: $firstName\n        gender: $gender\n        goalWeight: $goalWeight\n        height: $height\n        lastName: $lastName\n        password: $password\n        username: $username\n        weight: $weight\n    ) {\n      user {\n        email\n        firstName\n        lastName\n        username\n      }\n      usersInfo {\n        age\n        dailyCalories\n        gender\n        goalWeight\n        height\n        weight\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;