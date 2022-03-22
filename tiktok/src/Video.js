import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';

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
        src ="https://v16m-webapp.tiktokcdn-us.com/cae1e741fb6858e972b04651a93381df/623a524a/video/tos/alisg/tos-alisg-pve-0037c001/1ebab719f42647b185c0293fc97dd2c3/?a=1988&br=3588&bt=1794&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThRuzMDXq&l=202203221648320101131350430B84A2B9&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3A2Mzo6Zmk3OzMzODczNEApOTpmNjM2aWRlN2YzMzs1Z2dfL2xjcjRfX2VgLS1kMS1zcy0yYmBfYDNjLjBeMmNiLS46Yw%3D%3D&vl=&vr="></video>


        <VideoFooter />
        
        {/*VideoFooter*/}
        {/*VideoSidebar*/}

    </div>;
}

export default Video