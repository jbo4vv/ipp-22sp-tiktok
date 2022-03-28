import logo from './logo.svg';
import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">

    <div className="app__videos">
      <Video url="https://v16m-webapp.tiktokcdn-us.com/2f11bffcc64cbe808bb066c5deae2cb7/62415940/video/tos/useast5/tos-useast5-pve-0068-tx/3773d6d9038a4446abfc667f2e0667ca/?a=1988&br=2378&bt=1189&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7Th7OagDXq&l=202203280044130101130061040AEF34FD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M25uMzU6ZmV2OzMzZzczNEApM2U1OWc7OTtmNzpnNjw8NGdrcjZwcjRvcHJgLS1kMS9zczFgLjYyY2NeLTFfXmNfYmA6Yw%3D%3D&vl=&vr="
      channel="some channel"
      description="some description"
      song="some song"
      likes={123}
      messages={456}
      shares={789}
       />

      <Video url="https://v16m-webapp.tiktokcdn-us.com/2f11bffcc64cbe808bb066c5deae2cb7/62415940/video/tos/useast5/tos-useast5-pve-0068-tx/3773d6d9038a4446abfc667f2e0667ca/?a=1988&br=2378&bt=1189&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XY53A3E7nz7Th7OagDXq&l=202203280044130101130061040AEF34FD&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M25uMzU6ZmV2OzMzZzczNEApM2U1OWc7OTtmNzpnNjw8NGdrcjZwcjRvcHJgLS1kMS9zczFgLjYyY2NeLTFfXmNfYmA6Yw%3D%3D&vl=&vr="
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
