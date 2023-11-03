import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { Users } from "@/data/users";

export const authOptions = {
    secret: process.env.NextAuth_SECRET,
    // Configure one or more authentication providers
    providers: [
        
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "text" },
            password: { label: "Password", type: "password" },
          },
          authorize: async (credentials) => {
            const user = Users.find(
              (user) => {
                return (user.email === credentials.email &&
                user.password === credentials.password)

              }
              );
              
            if (user) {
              // Any object returned will be saved in `user` object of the session
              return Promise.resolve({
                id: user.id,
                name: user.name,
                email: user.email,
              });
            } else {
              return Promise.reject(new Error("Invalid email or password"));
            }
            // // The name to display on the sign in form (e.g. "Sign in with...")
            // name: "Credentials",
            // // `credentials` is used to generate a form on the sign in page.
            // // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // // e.g. domain, username, password, 2FA token, etc.
            // // You can pass any HTML attribute to the <input> tag through the object.
            // credentials: {
            //     email: {
            //         label: "email",
            //         type: "text",
            //         placeholder: "Enter email",
            //     },
            //     password: {
            //         label: "password",
            //         type: "password",
            //         placeholder: "Enter Password",
            //     },
            // },

            // async authorize(credentials, req) {
            //     const { email, password } = credentials
            //     const res = await fetch("http://localhost:3000/api/login", {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify({
            //             email,
            //             password,
            //         }),
            //     });
            //     const user = await res.json();
            //     if (res.ok && user) {
            //         return user;
            //     } else return null;
            // },
          }
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: '/auth/signin',
    }
}
export default NextAuth(authOptions)
