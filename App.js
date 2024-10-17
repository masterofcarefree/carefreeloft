import React, { useState, useEffect } from 'react';
import VideoFeed from './components/VideoFeed';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // 使用本地视频文件
    setVideos([
      { id: 1, url: '/video1.mp4' },
      { id: 2, url: '/video2.mp4' },
      { id: 3, url: '/video3.mp4' },
    ]);
  }, []);

  return (
    <div className="App">
      <VideoFeed videos={videos} />
    </div>
  );
}

export default App;
