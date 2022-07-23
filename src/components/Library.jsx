import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Library.css";
import { useNavigate } from "react-router-dom";
import { fetchPlaylists } from "../redux/actions";

export default function Library() {
  // const [playlists, setPlaylists] = useState(null);
  const myPlaylist = useSelector((state) => state.allPlaylists.playlists);
  // console.log(myPlaylist);
  const dispatch = useDispatch();

  useEffect(() => {
    //  apiClient.get("me/playlists").then(function (response) {
    //     setPlaylists(response.data.items);
    //   });
    dispatch(fetchPlaylists());
  }, []);

  const navigate = useNavigate();

  const playPlaylist = (id) => {
    console.log(id);
    navigate("/player", { state: { id: id } });
  };

  return (
    <div>
      <div className="screen-container">
        {window.location.pathname === "/library" ? <h2>Playlists</h2> : <p></p>}

        <div className="library-body">
          {myPlaylist?.map((playlist, id) => (
            <div
              className="playlist-card"
              key={playlist.id}
              onClick={() => playPlaylist(playlist.id)}
            >
              <img
                key={id}
                src={playlist.images[0].url}
                className="playlist-image"
                alt="Playlist-Art"
              />
              <p className="playlist-title">{playlist.name}</p>
              <p className="playlist-subtitle">{playlist.tracks.total} Songs</p>
              <div className="playlist-fade">
                {/* <IconContext.Provider value={{ size: "50px", color: "#E99D72" }}>
                <AiFillPlayCircle />
              </IconContext.Provider> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  style={{
                    width: "30px",
                    height: "35px",
                    color: "white",
                  }}
                >
                  <path d="M361 215C375.3 223.8 349 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
