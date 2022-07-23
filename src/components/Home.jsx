import React from "react";
import { useState, useEffect } from "react";
import Library from "./Library";
// import Player from "./Player";
import apiClient from "../spotify";
import "./Home.css";

const Home = () => {
  // users image
  const [image, setImage] = useState(
    "https://www.computerhope.com/jargon/g/guest-user.jpg"
  );
  const [name, setName] = useState("Joh Doe");

  useEffect(() => {
    apiClient.get("me").then((response) => {
      // console.log(response);
      setImage(response.data.images[0].url);
      setName(response.data.display_name);
    });
  });

  return (
    <div>
      <div className="image__right">
        <img src={image} alt="userImage" />
        <h4>{name}</h4>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLN7dC-dzw5qAJVx-1pj2nx-wEUE_X4Si8pWvjlW4b-JcLkKpLd6TbYYs9NPEOsrrwKAM&usqp=CAU"
          className="arrow"
        />
      </div>
      <div className="recentyly_played">
        <h2>Recently Played</h2>
      </div>
      <Library />
    </div>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
