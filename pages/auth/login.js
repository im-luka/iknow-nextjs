import Head from "next/head";
import { getProviders, useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignInPage = ({ providers }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace("/music/4you");
    }
  }, [session]);

  if (session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <Head>
        <title>iKNOW - Log In 4 Music</title>
      </Head>

      <h1 className="text-4xl">Login with iMUSIC</h1>

      {Object.values(providers).map((provider) => (
        <div key={provider.id}>
          <button
            className="p-4 text-lg bg-custom-blue text-custom-dark-blue rounded-full"
            onClick={() => signIn(provider.id)}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};

export default SignInPage;