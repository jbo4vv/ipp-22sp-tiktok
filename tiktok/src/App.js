import logo from './logo.svg';
import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">

    <div className="app__videos">
      <Video url="https://v16m-webapp.tiktokcdn-us.com/59b2000b04834ee04e328675a6c83466/62437268/video/tos/useast5/tos-useast5-ve-0068c004-tx/ceafb01ba2594fd6a2bb969117d354f0/?a=1988&br=2114&bt=1057&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThYuIgDXq&l=202203291455540101130060722618788A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y3d2k6ZnJnOzMzZzczNEApZmk0Mzw1OGU2NzpmOzZkNmdrXzRycjRvMG5gLS1kMS9zczIwNTRgYi1iLTExLi0xXjQ6Yw%3D%3D&vl=&vr="
      channel="some channel"
      description="some description"
      song="some song"
      likes={123}
      messages={456}
      shares={789}
       />

      <Video url="https://v16m-webapp.tiktokcdn-us.com/59b2000b04834ee04e328675a6c83466/62437268/video/tos/useast5/tos-useast5-ve-0068c004-tx/ceafb01ba2594fd6a2bb969117d354f0/?a=1988&br=2114&bt=1057&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7ThYuIgDXq&l=202203291455540101130060722618788A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Y3d2k6ZnJnOzMzZzczNEApZmk0Mzw1OGU2NzpmOzZkNmdrXzRycjRvMG5gLS1kMS9zczIwNTRgYi1iLTExLi0xXjQ6Yw%3D%3D&vl=&vr="
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
