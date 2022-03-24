import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
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
        src ="https://v16m-webapp.tiktokcdn-us.com/d769a17d34d382d3bc2d91a3462fe030/623ce0f9/video/tos/useast5/tos-useast5-ve-0068c004-tx/fa534fab842f4dc094531fa00328aa6b/?a=1988&br=5944&bt=2972&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7Th1p.JDXq&l=2022032415214701011313511005CA3805&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anA0ZGc6Zmc6OzMzZzczNEApZmY5ZThoOzw7NzU3aWZmNWcybHFvcjQwb3JgLS1kMS9zc181MV9eNi8vLzQ0YmNiMF46Yw%3D%3D&vl=&vr="></video>


        <VideoFooter />
        <VideoSidebar />

    </div>;
}

export default Video