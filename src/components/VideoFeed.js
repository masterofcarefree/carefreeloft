import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';

function VideoFeed({ videos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('Current video index:', currentIndex);
  }, [currentIndex]);

  const handleSwipe = (direction) => {
    console.log('Swipe direction:', direction);
    if (direction === 'up' && currentIndex < videos.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else if (direction === 'down' && currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <div className="video-feed">
      <VideoPlayer
        video={videos[currentIndex]}
        onSwipeUp={() => handleSwipe('up')}
        onSwipeDown={() => handleSwipe('down')}
      />
    </div>
  );
}

export default VideoFeed;
