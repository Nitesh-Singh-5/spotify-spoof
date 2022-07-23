import React, { useEffect, useState } from "react";
import "./Player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../spotify";
import SongCard from "./songCard/index";
import Queue from "./queue/index";
import AudioPLayer from "./audioPlayer/index";
import Widgets from "./widgets/index";

export default function Player() {
  const location = useLocation();
  console.log(location); // get pathname as "/player" and state = id
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          // console.log(res.data.items[0].track);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div>
      <div className="header">
        <div className="audio_player">
          <AudioPLayer
            currentTrack={currentTrack}
            total={tracks}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
        <div className="songs_section">
          <div className="audio_card">
            <SongCard album={currentTrack?.album} />
          </div>
          <div className="queue_song">
            <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
          </div>
        </div>

        <Widgets artistID={currentTrack?.album?.artists[0]?.id} />
      </div>
    </div>
  );
}
