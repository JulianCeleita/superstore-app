import NextAuth from "next-auth"
import GoogleProvider, {GoogleProfile} from "next-auth/providers/google"


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
}
export default NextAuth(authOptions)

