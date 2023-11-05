import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { Users } from '@/data/users';

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
        const user = Users.find(
          (user) => {
            return (user.email === credentials?.email &&
                user.password === credentials?.password);

          }
        );

        if (user) {
          // Any object returned will be saved in `user` object of the session
          return Promise.resolve({
            id: user.id,
            name: user.name,
            email: user.email
          });
        } else {
          return Promise.reject(new Error('Invalid email or password'));
        }
      }
    })
    // ...add more providers here
  ],
  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { ...token, ...user };
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     session.user = token;
  //     return session;
  //   }
  // },
  pages: {
    signIn: '/auth/signin'
  }
};
export default NextAuth(authOptions);
