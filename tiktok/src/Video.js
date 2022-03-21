import React, { useRef, useState } from 'react';
import "./Video.css";

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
        src ="https://v16m-webapp.tiktokcdn-us.com/17f30dbc6962735038da1794d3a862bf/62390085/video/tos/useast5/tos-useast5-ve-0068c004-tx/a60e8b1d9b134c00b2cb58d58563df2b/?a=1988&br=3516&bt=1758&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThogjMDXq&l=2022032116471901011313511722B528DE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzZsZTQ6ZnhlOjMzZzczNEApOTMzaGY2N2Q7N2Y4NDVnOGdiY2FgcjRvZ2xgLS1kMS9zc2BfYzRgYF5hMi1jNS41MS06Yw%3D%3D&vl=&vr="></video>

        {/*VideoFooter*/}
        {/*VideoSidebar*/}

    </div>;
}

export default Video