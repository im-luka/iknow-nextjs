import NextAuth from "next-auth";
// import SpotifyProvider from "next-auth/providers/spotify";
// import { spotifyApi } from "../../../api/apiConfig";
// import { LOGIN_URL } from "../../../data/spotify";

// const refreshAccessToken = async (token) => {
//   try {
//     spotifyApi.setAccessToken(token.accessToken);
//     spotifyApi.setRefreshToken(token.refreshToken);

//     const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
//     console.log("REFRESHED TOKEN IS", refreshedToken);

//     return {
//       ...token,
//       accessToken: refreshedToken.access_token,
//       accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
//       refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       ...token,
//       error: "RefreshAccessTokenError",
//     };
//   }
// };

export default NextAuth({
  providers: [
    //     // SpotifyProvider({
    //     //   clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    //     //   clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    //     //   authorization: LOGIN_URL,
    //     // }),
  ],
  //   // secret: process.env.NEX,
  //   pages: {
  //     signIn: "/auth/login",
  //   },
  //   callbacks: {
  //     async jwt({ token, account, user }) {
  //       // initial sign in
  //       if (account && user) {
  //         return {
  //           ...token,
  //           accessToken: account.access_token,
  //           refreshToken: account.refresh_token,
  //           username: account.providerAccountId,
  //           accessTokenExpires: account.expires_at * 1000,
  //         };
  //       }

  //       // return previous token if the access token has not yet expired
  //       if (Date.now() < token.accessTokenExpires) {
  //         console.log("ACCESS TOKEN IS VALID");
  //         return token;
  //       }

  //       // if the access token has expired -> lets refresh it
  //       console.log("ACCESS TOKEN HAS EXPIRED, REFRESHING...");
  //       return await refreshAccessToken(token);
  //     },

  //     async session({ session, token }) {
  //       session.user.accessToken = token.accessToken;
  //       session.user.refreshToken = token.refreshToken;
  //       session.user.username = token.username;

  //       return session;
  //     },
  //   },
});
