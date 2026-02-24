import React from "react";
import { fetchPhoto, fetchVideos } from "./api/mediaApi";

const App = () => {
  // function getPhotos() {
  //   fetchPhoto();
  // }

  return (
    <div className="h-screen w-full text-white bg-gray-950">
      <button
        onClick={async () => {
          const data = await fetchPhoto("cat");
          console.log(data.results);
        }}
      >
        CLick the data
      </button>
      <br />

      <button
        onClick={async () => {
          const data = await fetchVideos("cat");
          console.log(data.videos);
        }}
      >
        CLick the the video
      </button>
    </div>
  );
};

export default App;
