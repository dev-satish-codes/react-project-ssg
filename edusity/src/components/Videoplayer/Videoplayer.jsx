import React from 'react'
import './Videoplayer.css'
import videoplay from '../../assets/video.mp4'
const Videoplayer = ({playState ,setPlayState}) => {
  const handleCancelClick = () => {
    setPlayState(false);
  };

  return (
    <div className={`video_player ${playState?'':'hide'}`} onClick={handleCancelClick}>
      <video src={videoplay} autoPlay muted controls></video>
      <button onClick={handleCancelClick}>close</button>
    </div>
  )
}

export default Videoplayer
