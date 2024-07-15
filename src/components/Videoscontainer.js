import React, { useEffect, useState } from 'react';
import VideoCards from './VideoCards';

const API_KEY = "AIzaSyDS5DhZ5A2UBJ-UCa-iPcMcaD8cNXvR3_M";
const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${API_KEY}`;

const VideosContainer = () => {
  // const [videos, setVideos] = useState([]);
  // const [loading, setLoading] = useState(true);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()
    console.log(json)
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      <h1>Praveen</h1>
      <VideoCards/>
    </div>
  );
};

export default VideosContainer;
