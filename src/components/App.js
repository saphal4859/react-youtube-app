import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";

import VideoList from "./videoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");
  //setSelectedVideo(response.data.items[0]);
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoClick={setSelectedVideo}
              // onVideoClick={(video) => {
              //   setSelectedVideo(video);
              // }}
              //or onVideoClick={setSelectedVideo} since we are passing same name as params
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
