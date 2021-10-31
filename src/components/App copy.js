import React from "react";
import ReactDom from "react-dom";
import SearchBar from "./SearchBar";
import Youtube from "../apis/Youtube";
import VideoList from "./videoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.onTermSubmit("/buildings");
  }
  onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items, //right hand side
      selectedVideo: response.data.items[0],
    });
  };
  onVideoClick = (video) => {
    this.setState({
      selectedVideo: video,
    });
    console.log("From the app : ", video);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoClick={this.onVideoClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
