import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"


import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID as string,
            clientSecret: process.env.FACEBOOK_SECRET as string
        }),
        

        CredentialsProvider({
            name : 'credentials',
            credentials:{
                email: {label: 'email', type: 'text'},
                password: {label: 'password', type: 'password'},
            },
            async authorize(credentials){
                if (!credentials?.email || !credentials?.password){
                    throw new Error('Invalid username or password');
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user?.hashedPassword){
                    throw new Error('Invalid Username or password');
                }

                const isCorrectPassword = await bcrypt.compare(
                    credentials.password, user.hashedPassword
                );

                if (!isCorrectPassword){
                    throw new Error('Invalid Password');
                }

                return user;
            }
        })
    ],
    pages:{
        signIn: '/',
    },
    debug: process.env.NODE_ENV == "development",
    session:{
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,

};

export default NextAuth(authOptions)