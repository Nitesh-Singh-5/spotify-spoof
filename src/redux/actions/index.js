import apiClient from "../../spotify";
import { ActionTypes } from "../constants/action-types";

export const fetchPlaylists = () => {
  return async (dispatch) => {
    const response = await apiClient.get("/me/playlists");
    dispatch({
      type: ActionTypes.FETCH_PLAYLISTS,
      payload: response.data.items,
    });
  };
};

export const fetchPlayer = (id) => {
  // const location = useLocation();
  return async (dispatch) => {
    const response = await apiClient.get("playlists/" + id + "/tracks");
    console.log(response);
    dispatch({
      type: ActionTypes.FETCH_PLAYER,
      payload: response.data.items,
    });
  };
};

export const releasedPlaylist = () => {
  return async (dispatch) => {
    const response = await apiClient.get("/browse/new-releases?country=IN");
    console.log(response);
    dispatch({
      type: ActionTypes.NEW_RELEASES,
      payload: response.data.albums.items,
    });
  };
};

export const featuredPlaylist = () => {
  return async (dispatch) => {
    const response = await apiClient.get("/browse/featured-playlists");
    console.log(response.data.playlists.items);
    dispatch({
      type: ActionTypes.FEATURED_PLALISTS,
      payload: response.data.playlists.items,
    });
  };
};
