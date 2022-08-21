import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: {},
};

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
  },
});

export const { setPlaylist } = playlistsSlice.actions;

export default playlistsSlice.reducer;
