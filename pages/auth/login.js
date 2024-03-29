import Head from "next/head";
import { getProviders, useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../../components/music/loader/loader";

const SignInPage = ({ providers }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/music/4you");
    }
  }, [router, session]);

  if (session) {
    return <Loader />;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <Head>
        <title>iKNOW - Log In 4 Music</title>
      </Head>

      <h1 className="text-4xl">Login with iMUSIC</h1>

      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider?.id}>
            <button
              className="p-4 text-lg bg-custom-blue text-custom-dark-blue rounded-full"
              onClick={() => signIn(provider?.id)}
            >
              Login with {provider?.name}
            </button>
          </div>
        ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default SignInPage;
