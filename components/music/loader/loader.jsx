import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="space-y-6 flex flex-col justify-center items-center">
        <ScaleLoader color="#99c2fc" width="2rem" height="5rem" />
        <p className="text-xl font-bold tracking-wide">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
