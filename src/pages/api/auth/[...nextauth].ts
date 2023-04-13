import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"



export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    /* TODO add login with facebook */
    FacebookProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      }),
  ],
}
export default NextAuth(authOptions)

