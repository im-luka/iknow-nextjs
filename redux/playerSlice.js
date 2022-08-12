import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  song: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.song = action.payload;
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setTrack, setIsPlaying } = playerSlice.actions;

export default playerSlice.reducer;
