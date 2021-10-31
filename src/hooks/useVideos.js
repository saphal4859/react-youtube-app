import { useState, useEffect } from "react";
import Youtube from "../apis/Youtube";
const useVideos = (defaultSearchterm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search("/" + defaultSearchterm);
  }, [defaultSearchterm]);

  const search = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search];
};
export default useVideos;
