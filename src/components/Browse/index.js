import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { releasedPlaylist, featuredPlaylist } from "../../redux/actions";
import apiClient from "../../spotify";
import "./browse.css";

export default function Browse() {
  // const [newRelease, setNewRelease] = useState(null);
  // const [featuredPlaylist, setfeaturedPlaylist] = useState(null);
  const dispatch = useDispatch();

  const newReleases = useSelector((state) => state.newReleases.releases);
  const featuredPlaylists = useSelector(
    (state) => state.featuredPlaylist.featured_playlist
  );

  useEffect(() => {
    // apiClient.get("/browse/new-releases").then((response) => {
    //   // console.log(response.data.albums.items);
    //   setNewRelease(response.data.albums.items);
    // });
    // apiClient.get("/browse/featured-playlists").then((response) => {
    //   console.log(response.data.playlists.items);
    //   setfeaturedPlaylist(response.data.playlists.items);
    // });
    dispatch(releasedPlaylist());
    dispatch(featuredPlaylist());
  }, []);
  return (
    <div className="container">
      <h2>New Releases</h2>
      <div className="browse-body">
        {newReleases?.map((item) => (
          <div
            className="browse-card"
            key={item.id}
            // onClick={() => playbrowse(item.id)}
          >
            <img
              src={item.images[1].url}
              className="browse-image"
              alt="browse-Art"
            />
            <p className="browse-title">{item.name}</p>
            <p className="release_date">Release : {item.release_date}</p>
            <p className="release_date">Total Tracks : {item.total_tracks}</p>
          </div>
        ))}
      </div>
      <h2>Feautured Playlist</h2>
      <div className="browse-body">
        {featuredPlaylists?.map((item) => (
          <div
            className="browse-card"
            key={item.id}
            // onClick={() => playbrowse(item.id)}
          >
            <img
              src={item.images[0].url}
              className="browse-image"
              alt="browse-Art"
            />
            <p className="browse-title">{item.name}</p>
            <p className="release_date">{item.description}</p>
            {/* <p className="release_date">Total Tracks : {item.total_tracks}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
