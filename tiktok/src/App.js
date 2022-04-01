import logo from './logo.svg';
import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">

    <div className="app__videos">
      <Video url="https://v16m-webapp.tiktokcdn-us.com/f4a86752500e2d6f5c2bcba5bf186705/62479e00/video/tos/useast5/tos-useast5-ve-0068c003-tx/0cedf0ed999a47efa3137be9b0b7bcd7/?a=1988&br=2582&bt=1291&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThLGrzDXq&l=202204011850550101130061950EFDC6D7&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3V1eTs6ZnhqPDMzZzczNEApZWc6PDhlNmVnN2dlaDo3N2cvZzU2cjQwYjBgLS1kMS9zczVjXjJgY2EwNjFiLTUuNWM6Yw%3D%3D&vl=&vr="
      channel="some channel"
      description="some description"
      song="some song"
      likes={123}
      messages={456}
      shares={789}
       />

      <Video url="https://v16m-webapp.tiktokcdn-us.com/f4a86752500e2d6f5c2bcba5bf186705/62479e00/video/tos/useast5/tos-useast5-ve-0068c003-tx/0cedf0ed999a47efa3137be9b0b7bcd7/?a=1988&br=2582&bt=1291&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThLGrzDXq&l=202204011850550101130061950EFDC6D7&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3V1eTs6ZnhqPDMzZzczNEApZWc6PDhlNmVnN2dlaDo3N2cvZzU2cjQwYjBgLS1kMS9zczVjXjJgY2EwNjFiLTUuNWM6Yw%3D%3D&vl=&vr="
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
