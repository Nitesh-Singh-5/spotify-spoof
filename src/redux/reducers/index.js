import { combineReducers } from "redux";
import { playlistReducer } from "./spotifyReducer";
const reducers = combineReducers({
  allPlaylists: playlistReducer,
  newReleases: playlistReducer,
  featuredPlaylist: playlistReducer,
  allTrack: playlistReducer,
});
export default reducers;
