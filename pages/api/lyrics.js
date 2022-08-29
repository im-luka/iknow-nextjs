import LyricsFinder from "lyrics-finder";

async function handler(req, res) {
  res.json({
    a: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET,
    b: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
    c: process.env.NEXTAUTH_URL,
    d: process.env.NEXTAUTH_SECRET,
  });

  return;

  if (req.method !== "POST") res.json({ message: "not post method" });

  const { name, artist } = req.body;

  try {
    const lyrics = (await LyricsFinder(artist, name)) || "No Lyrics Found";

    res.json({ lyrics });
  } catch (error) {
    res.json({ message: error });
  }
}

export default handler;
