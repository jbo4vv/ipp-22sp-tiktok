import logo from './logo.svg';
import './App.css';
import Video from "./Video.js";

function App() {
  return (
    <div className="app">
      

    <div className="app__videos">
      <Video url="https://v16m-webapp.tiktokcdn-us.com/4634df835a9e33611503619c4a4024a9/624e592b/video/tos/useast5/tos-useast5-ve-0068c003-tx/4cfb588ba9ae403eb3567776e4bcb4e7/?a=1988&br=1968&bt=984&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThCMuSDXq&l=2022040621230701011300614719BDDA6D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ank2cTM6Zm9vPDMzZzczNEApZzk5aTMzNjtnNzw4Njk1aGc1ajMtcjRvXzJgLS1kMS9zc14tLzEuNF4vLl5iXi0tYzI6Yw%3D%3D&vl=&vr="
      channel="some channel"
      description="some description"
      song="some song"
      likes={123}
      messages={456}
      shares={789}
      />
      
      <Video url="https://v16m-webapp.tiktokcdn-us.com/4634df835a9e33611503619c4a4024a9/624e592b/video/tos/useast5/tos-useast5-ve-0068c003-tx/4cfb588ba9ae403eb3567776e4bcb4e7/?a=1988&br=1968&bt=984&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThCMuSDXq&l=2022040621230701011300614719BDDA6D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ank2cTM6Zm9vPDMzZzczNEApZzk5aTMzNjtnNzw4Njk1aGc1ajMtcjRvXzJgLS1kMS9zc14tLzEuNF4vLl5iXi0tYzI6Yw%3D%3D&vl=&vr="
      channel="some channel"
      description="some description"
      song="some song"
      likes={123}
      messages={456}
      shares={789}
      />
    </div>

      {/*app container */}
        {/* videos */}
      
    </div>
  );
}

export default App;
