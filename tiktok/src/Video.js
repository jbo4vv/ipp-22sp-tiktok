import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';

function Video() {

    const [playing, setPlaying] = useState(false);

    const videoRef = useRef(null);

    const handleVideoPress = () => {
        //if video pllaying --> pause
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        //otherwise --> play
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return <div className="video">

        <video 
        onClick= {handleVideoPress}
        className="video_play"
        loop
        ref = {videoRef}
        src ="https://v16m-webapp.tiktokcdn-us.com/1b642cad5c17c6acba85cc1e0351b4cb/6240f950/video/tos/useast5/tos-useast5-ve-0068c004-tx/ceafb01ba2594fd6a2bb969117d354f0/?a=1988&br=2114&bt=1057&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThmOjgDXq&l=202203271754420101131351170683552E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y3d2k6ZnJnOzMzZzczNEApZmk0Mzw1OGU2NzpmOzZkNmdrXzRycjRvMG5gLS1kMS9zczIwNTRgYi1iLTExLi0xXjQ6Yw%3D%3D&vl=&vr="></video>

        <VideoFooter />
        {/*VideoFooter*/}
        {/*VideoSidebar*/}
            
    </div>;
    
}

export default Video