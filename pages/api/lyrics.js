import LyricsFinder from "lyrics-finder";

async function handler(req, res) {
  if (req.method !== "POST") return;

  const { name, artist } = req.body;

  const lyrics = (await LyricsFinder(artist, name)) || "No Lyrics Found";

  res.json({ lyrics });
}

export default handler;
