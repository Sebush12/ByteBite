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

export type ChangePassword = {
  __typename?: 'ChangePassword';
  user?: Maybe<UserType>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<UserType>;
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

export type LoginUser = {
  __typename?: 'LoginUser';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserType>;
};

export type LogoutUser = {
  __typename?: 'LogoutUser';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<ChangePassword>;
  createFoodItem?: Maybe<FoodItemMutation>;
  createUser?: Maybe<CreateUser>;
  loginUser?: Maybe<LoginUser>;
  logoutUser?: Maybe<LogoutUser>;
};


export type MutationChangePasswordArgs = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};


export type MutationCreateFoodItemArgs = {
  calories: Scalars['Int']['input'];
  carbs: Scalars['Decimal']['input'];
  fat: Scalars['Decimal']['input'];
  name: Scalars['String']['input'];
  protein: Scalars['Decimal']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  allUsers?: Maybe<Array<Maybe<UserType>>>;
  allUsersInfo?: Maybe<Array<Maybe<Users_InfoType>>>;
  userById?: Maybe<UserType>;
};


export type QueryUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type UserFoodLogType = {
  __typename?: 'UserFoodLogType';
  date: Scalars['Date']['output'];
  foodItem: FoodItemType;
  servings: Scalars['Int']['output'];
  user: Users_InfoType;
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  lastName: Scalars['String']['output'];
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
  user: UserType;
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

export type CreateUserMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUser', user?: { __typename?: 'UserType', email: string, firstName: string, lastName: string, username: string } | null } | null };


export const CreateFoodItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFoodItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"calories"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"carbs"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fat"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"protein"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Decimal"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFoodItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"calories"},"value":{"kind":"Variable","name":{"kind":"Name","value":"calories"}}},{"kind":"Argument","name":{"kind":"Name","value":"carbs"},"value":{"kind":"Variable","name":{"kind":"Name","value":"carbs"}}},{"kind":"Argument","name":{"kind":"Name","value":"fat"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fat"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"protein"},"value":{"kind":"Variable","name":{"kind":"Name","value":"protein"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"foodItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"calories"}},{"kind":"Field","name":{"kind":"Name","value":"carbs"}},{"kind":"Field","name":{"kind":"Name","value":"fat"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"protein"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFoodItemMutation, CreateFoodItemMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"firstName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"firstName"}}},{"kind":"Argument","name":{"kind":"Name","value":"lastName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lastName"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;