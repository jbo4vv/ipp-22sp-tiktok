import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video( {url}) {
    const [playing, setPlaying] = useState(false);


    const videoRef =  useRef(null); 

    
    const handleVideoPress = () =>{
        //if video playing --> pause
        if (playing) {
           videoRef.current.pause(); 
           setPlaying(false);   
        }
         //otherwise --> play
        else{
            videoRef.current.play();
            setPlaying(true);  
        }
    }

    return <div className="video">

        <video 
        onClick= {handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src ={url}></video>


        <VideoFooter channel={'dogChannel'} description={'Husky'} song={'What a Wonderful World'}/>
        <VideoSidebar likes ={111} messages={222} shares = {333} />

    </div>;
}

export default Video