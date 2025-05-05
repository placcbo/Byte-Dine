import React, { useState, useRef, useEffect } from 'react';
import "./Intro.scss";
import { meal } from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Intro = () => {
  const vidRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);

  // Auto-play video on component mount
  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.play();
      setPlayVideo(true);
    }
  }, []);

  const handleVideo = () => {
    const video = vidRef.current;

    if (playVideo) {
      video.pause();
    } else {
      video.play();
    }

    setPlayVideo(!playVideo);
  };

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        muted
        playsInline
        aria-label="Intro promotional video"
      >
        Your browser does not support the video tag.
      </video>

      <div className="app__video-overlay flex__center" onClick={handleVideo}>
        <div className="app__video-overlay_circle flex__center">
          {playVideo ? (
            <BsPauseFill color="#fff" size={30} />
          ) : (
            <BsFillPlayFill color="#fff" size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;