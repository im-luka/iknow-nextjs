import LyricsFinder from "lyrics-finder";

async function handler(req, res) {
  if (req.method !== "POST") return;

  const { name, artist } = req.body;

  try {
    const lyrics = (await LyricsFinder(artist, name)) || "No Lyrics Found";

    res.json({ lyrics });
  } catch (error) {
    res.json({ message: error });
  }
}

export default handler;
