import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import { setClientToken } from "./spotify";
import Library from "./components/Library";
import Browse from "./components/Browse/index.js";

const App = () => {
  // checks whether token is present or not
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return !token ? (
    <Login />
  ) : (
    <Router>
      <div className="container-fluid">
        <Row>
          <>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/player" element={<Player />} />
              <Route path="/library" element={<Library />} />
              <Route path="/browse" element={<Browse />} />
            </Routes>
            <Sidebar />
          </>
        </Row>
      </div>
    </Router>
  );
};

export default App;
