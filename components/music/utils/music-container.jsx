import Features from "../features/features";
import Navbar from "../navbar/navbar";

const MusicContainer = ({ children }) => {
  return (
    <div className="h-screen flex flex-col items-start xl:flex-row">
      <Navbar />
      <section className="flex-grow ml-20 xl:ml-auto">{children}</section>
      <Features />
    </div>
  );
};

export default MusicContainer;
