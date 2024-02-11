import { connectMongoBD } from "@/app/lib/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from 'next-auth/providers/google'
import User from "@/app/models/user";
import bcrypt from 'bcryptjs'
const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;
                try {
                    await connectMongoBD();
                    const user = await User.findOne({ email })
                    if (!user) {
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if (!passwordMatch) {
                        return null;
                    }
                    return user
                } catch (error) {
                    console.log("error:", error);
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, session, user }) {
            if (user) {
                const exist = await User.findOne({ email: user.email });
                if (!exist) return null;
                if (user.role == 'superadmin') {
                    return {
                        ...token,
                        role: user.role,
                    }
                } else {
                    return {
                        ...token,
                        role: user.role,
                        school: user.school
                    }
                }s
            }
            return token
        },
        async session({ session, user, token }) {
            if (token.role == "superadmin") {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        role: token.role,
                    }
                }
            } else {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        role: token.role,
                        school: token.school
                    }
                }
            }

        }
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signin"
    },
}

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }