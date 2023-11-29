import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { Exact } from './graphql';
import { gql } from 'urql';

export type LoginUserMutationVariables = Exact<{
  username: string;
  password: string;
}>;

export interface LoginUserMutation {
  loginUser: {
    user: {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
      email: string;
    } | null;
  };
}

export const LOGIN_USER: DocumentNode<LoginUserMutation, LoginUserMutationVariables> = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      user {
        id
        username
        firstName
        lastName
        email
      }
    }
  }
`;
