/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: { input: any; output: any; }
};

export type FoodItemMutation = {
  __typename?: 'FoodItemMutation';
  foodItem?: Maybe<FoodItemType>;
};

export type FoodItemType = {
  __typename?: 'FoodItemType';
  calories: Scalars['Int']['output'];
  carbs: Scalars['Decimal']['output'];
  fat: Scalars['Decimal']['output'];
  name: Scalars['String']['output'];
  protein: Scalars['Decimal']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFoodItem?: Maybe<FoodItemMutation>;
};


export type MutationCreateFoodItemArgs = {
  calories: Scalars['Int']['input'];
  carbs: Scalars['Decimal']['input'];
  fat: Scalars['Decimal']['input'];
  name: Scalars['String']['input'];
  protein: Scalars['Decimal']['input'];
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<UsersType>>>;
  allUsersInfo?: Maybe<Array<Maybe<Users_InfoType>>>;
};

export type UserFoodLogType = {
  __typename?: 'UserFoodLogType';
  date: Scalars['Date']['output'];
  foodItem: FoodItemType;
  servings: Scalars['Int']['output'];
  user: Users_InfoType;
};

export type UsersType = {
  __typename?: 'UsersType';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  info?: Maybe<Users_InfoType>;
  lastName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type Users_InfoType = {
  __typename?: 'Users_InfoType';
  age: Scalars['Int']['output'];
  dailyCalories: Scalars['Int']['output'];
  goal: Scalars['String']['output'];
  goalWeight: Scalars['Decimal']['output'];
  height: Scalars['Int']['output'];
  startWeight: Scalars['Decimal']['output'];
  user: UsersType;
  userfoodlogSet: Array<UserFoodLogType>;
  weight: Scalars['Decimal']['output'];
};

export type CreateFoodItemMutationVariables = Exact<{
  calories: Scalars['Int']['input'];
  carbs: Scalars['Decimal']['input'];
  fat: Scalars['Decimal']['input'];
  name: Scalars['String']['input'];
  protein: Scalars['Decimal']['input'];
}>;


export type CreateFoodItemMutation = { __typename?: 'Mutation', createFoodItem?: { __typename?: 'FoodItemMutation', foodItem?: { __typename?: 'FoodItemType', calories: number, carbs: any, fat: any, name: string, protein: any } | null } | null };

export type Get_UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_UsersQuery = { __typename?: 'Query', allUsers?: Array<{ __typename?: 'UsersType', id: string, name: string, info?: { __typename?: 'Users_InfoType', goalWeight: any, height: number, startWeight: any } | null } | null> | null };


export const CreateFoodItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFoodItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"calories"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carbs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fat"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"protein"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFoodItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"calories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"calories"}}},{"kind":"Argument","name":{"kind":"Name","value":"carbs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carbs"}}},{"kind":"Argument","name":{"kind":"Name","value":"fat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fat"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"protein"},"value":{"kind":"Variable","name":{"kind":"Name","value":"protein"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"foodItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"protein"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFoodItemMutation, CreateFoodItemMutationVariables>;
export const Get_UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_USERS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"goalWeight"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"startWeight"}}]}}]}}]}}]} as unknown as DocumentNode<Get_UsersQuery, Get_UsersQueryVariables>;