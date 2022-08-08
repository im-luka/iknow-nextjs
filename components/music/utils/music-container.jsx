import Features from "../features/features";
import Navbar from "../navbar/navbar";

const MusicContainer = ({ children }) => {
  return (
    <div className="h-screen flex items-start">
      <Navbar />
      <section className="flex-grow">{children}</section>
      <Features />
    </div>
  );
};

export default MusicContainer;
