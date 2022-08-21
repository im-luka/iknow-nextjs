import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import playlistsReducer from "./playlistsSlice";

const store = configureStore({
  reducer: {
    player: playerReducer,
    playlists: playlistsReducer,
  },
});

export default store;
