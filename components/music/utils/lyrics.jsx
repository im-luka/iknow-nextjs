import { useEffect } from "react";
import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import CloseButton from "../../screenplay/utils/close-button";

const Lyrics = ({ artist, name, setShowLyrics }) => {
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLyrics = async () => {
      const response = await fetch("/api/lyrics", {
        method: "POST",
        body: JSON.stringify({ name, artist }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      setLyrics(data.lyrics);
      setLoading(false);
    };

    handleLyrics();
  }, []);

  return (
    <div className="absolute bottom-0 top-0 left-0 right-0 z-20 bg-custom-black/70">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 h-[575px] min-w-[500px] p-4 pt-5 text-center overflow-y-scroll bg-custom-black whitespace-pre">
        <div className="absolute top-0 right-0">
          <CloseButton onClick={() => setShowLyrics(false)} />
        </div>
        {loading ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <ClimbingBoxLoader color="#99c2fc" />
            <p>Loading...</p>
          </div>
        ) : (
          lyrics
        )}
      </div>
    </div>
  );
};

export default Lyrics;
