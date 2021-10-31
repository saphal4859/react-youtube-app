import React from "react";
import ReactDom from "react-dom";
import "./videoItem.css";
const VideoItem = ({ video, onVideoClick }) => {
  return (
    <div
      className="video-item item"
      onClick={() => {
        onVideoClick(video);
      }}
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
