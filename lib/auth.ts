import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connect } from "./database";
import { User } from "@/models";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        await connect();
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await User.findOne({ email: email }).exec();
        if (!user) {
          throw new Error("Email not exists.");
        }

        const isPasswordMatch = await bcrypt.compare(password, user?.password);

        if (!isPasswordMatch) {
          throw new Error("Invalid credentials.");
        }
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/login" },
};
