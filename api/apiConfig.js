export const screenplayApiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: process.env.NEXT_PUBLIC_SCREENPLAY_API_KEY,
  coverImage: (imagePath) => `https://image.tmdb.org/t/p/original${imagePath}`,
  posterImage: (imagePath) => `https://image.tmdb.org/t/p/w500${imagePath}`,
};
