const scopes = [
  "user-modify-playback-state",
  "user-follow-modify",
  "user-read-recently-played",
  "user-read-playback-position",
  "playlist-read-collaborative",
  "user-read-playback-state",
  "user-read-email",
  "streaming",
  "user-top-read",
  "playlist-modify-public",
  "user-library-modify",
  "user-follow-read",
  "user-read-currently-playing",
  "user-library-read",
  "playlist-read-private",
  "user-read-private",
  "playlist-modify-private",
].join(",");

const params = {
  scope: scopes,
};
const queryParamString = new URLSearchParams(params);

export const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;
