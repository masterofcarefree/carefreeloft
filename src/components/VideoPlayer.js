import React, { useRef, useEffect, useState } from 'react';

function VideoPlayer({ video, onSwipeUp, onSwipeDown }) {
  const videoRef = useRef(null);
  const [startY, setStartY] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => console.log('视频自动播放失败:', error));
    }
  }, [video]);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (startY === null) return;
    
    const currentY = e.touches[0].clientY;
    const diffY = startY - currentY;

    if (Math.abs(diffY) > 50) {
      if (diffY > 0) {
        onSwipeUp();
      } else {
        onSwipeDown();
      }
      setStartY(null);
    }
  };

  const handleTouchEnd = () => {
    setStartY(null);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  return (
    <div
      className="video-player"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <video 
        ref={videoRef} 
        src={video.url} 
        autoPlay 
        loop 
        playsInline
        muted={isMuted}
        onTimeUpdate={handleProgress}
      />
      <div className="controls">
        <button onClick={togglePlay}>{isPlaying ? '暂停' : '播放'}</button>
        <button onClick={toggleMute}>{isMuted ? '取消静音' : '静音'}</button>
        <div className="progress-bar">
          <div className="progress" style={{width: `${progress}%`}}></div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
