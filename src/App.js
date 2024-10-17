import React, { useState, useEffect } from 'react';
import VideoFeed from './components/VideoFeed';  // 确保这行是正确的

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videoList = [
      { id: 1, url: `${process.env.PUBLIC_URL}/video1.mp4` },
      { id: 2, url: `${process.env.PUBLIC_URL}/video2.mp4` },
      { id: 3, url: `${process.env.PUBLIC_URL}/video3.mp4` },
    ];
    setVideos(videoList);
    console.log('Videos loaded:', videoList);
  }, []);

  return (
    <div className="App">
      {videos.length > 0 ? <VideoFeed videos={videos} /> : <p>Loading videos...</p>}
    </div>
  );
}

export default App;
