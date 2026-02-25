import React from "react";
// import { fetchPhoto, fetchVideos } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";

const App = () => {
  // function getPhotos() {
  //   fetchPhoto();
  // }

  return (
    <div className="h-screen w-full text-white bg-gray-950">
      <SearchBar />
    </div>
  );
};

export default App;
