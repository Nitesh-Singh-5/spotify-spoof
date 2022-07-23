import { ActionTypes } from "../constants/action-types";

const initialState = {
  playlists: [],
};
export const playlistReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PLAYLISTS:
      return { ...state, playlists: payload };
    case ActionTypes.NEW_RELEASES:
      return { ...state, releases: payload };
    case ActionTypes.FEATURED_PLALISTS:
      return { ...state, featured_playlist: payload };
    case ActionTypes.FETCH_PLAYER:
      return { ...state, allSongs: payload };
    default:
      return state;
  }
};
