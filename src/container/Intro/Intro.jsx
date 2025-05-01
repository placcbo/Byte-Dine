import React, { useState } from 'react'
import "./Intro.scss"
import { images } from '../../constants'
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants'



const Intro = () => {

  const vidRef = React.useRef()
  const [playVideo,setPlayVideo] = React.useState(false)

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo )

    if (playVideo) {
      vidRef.current.pause()
      
    }   else{
      vidRef.current.play()
    }
  }

  return (
    <div className='app__video'>
      <video src={meal}   ref={vidRef} type = "videp/mp4"  loop controls = {false} muted />

      <div className="app__video-overlay flex__center">
        <div 
        
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
        >

          {playVideo ? (
            <BsPauseFill/>
          ) : <BsFillPlayFill color='#fff' style={{fontSize:30}}/>}


        </div>
      </div>
      
    </div>
  )
}

export default Intro
