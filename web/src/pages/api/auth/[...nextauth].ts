import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { cacheExchange, createClient, fetchExchange } from 'urql';
import { LOGIN_USER } from '@/gql/mutation-login';

export const authOptions = {
  secret: process.env.NextAuth_SECRET,
  // Configure one or more authentication providers
  providers: [

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {

        const client = createClient({
          url: 'http://127.0.0.1:8000/graphql',
          exchanges: [cacheExchange, fetchExchange]
        });

        try {
          console.log('Vars: ', credentials?.password,  credentials?.email);
          const variables = (credentials?.password && credentials?.email) ?
            {
              password: credentials?.password,
              username: credentials?.email
            } :
            {
              password: '',
              username: ''
            };

          const result = await client.mutation(LOGIN_USER, variables).toPromise();
          if (result.error) {
            throw new Error(result.error.message);
          }

          const user = result.data?.loginUser.user;
          console.log(user);
          if (user) {
            return {
              id: user.id,
              name: `${user.firstName} ${user.lastName}`,
              email: user.email
            };
          } else {
            return Promise.reject(new Error('Incorrect email or password'));
          }
        } catch (error) {
          console.error(error);
          return Promise.reject(new Error('Error connecting to GraphQL'));
        }
      }
    })
    // ...add more providers here
  ],
  // ... rest of the config ...
  callbacks: {
    async jwt({ token, user }): Promise<any> {
      // user object is available when signing in for the first time
      if (user) {
        token.id = user.id; // Store the user's ID in the JWT
      }
      return token;
    },
    async session({ session, token }): Promise<any> {
      // Add the user ID to the session
      session.user.id = token.id;
      return session;
    }
  }
};
export default NextAuth(authOptions);
