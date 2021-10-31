import React from "react";
import ReactDom from "react-dom";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onVideoClick }) => {
  const renderedList = videos.map((e) => {
    return (
      <VideoItem key={e.id.videoId} video={e} onVideoClick={onVideoClick} />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
