import { useState, useEffect } from "react";

// List of video file paths
const videos = [
  "/1.mp4", // Your video file in the public folder
  "/path/to/video2.mp4", // Optional additional videos
  "/path/to/video3.mp4"
];

const VideoBackground = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const videoSrc = videos[currentVideo];

  return (
    <video id="backgroundVideo" autoPlay loop muted>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;