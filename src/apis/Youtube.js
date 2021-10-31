import axios from "axios";

const KEY = "AIzaSyBjf9a0pcJ5eUg8unfdc69D3cKXu7WepS8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
