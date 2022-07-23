import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import apiClient from "../spotify.js";

const Sidebar = () => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    apiClient.get("me/playlists").then(function (response) {
      // console.log(response.data.items);
      setPlaylist(response.data.items);
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-white fixed-left ">
        <div className="nav-container ">
          <Link to="/" className="navbar-brand">
            <img
              src="/logo/Spotify_Logo.png"
              alt="Spotify_Logo"
              width="131"
              height="40"
            />
          </Link>
          <div className="list_section">
            <div className="header">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fas fa-home fa-lg"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link to="/browse">
                    <i className="fas fa-search fa-lg"></i>&nbsp; Browse
                  </Link>
                </li>
                <li>
                  <Link to="/library">
                    <i className="fas fa-book-open fa-lg"></i>&nbsp; Your
                    Library
                  </Link>
                </li>
              </ul>
            </div>
            <div className="playlist__header">
              <ul>
                <li>
                  <h3>My Playlist</h3>
                </li>
                {playlist?.map((play, id) => (
                  <li>
                    <Link key={id} to="/">
                      {play.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
