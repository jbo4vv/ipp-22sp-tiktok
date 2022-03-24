import React, {useState} from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSidebar() {

  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize='large'/>
        ) : (
          <FavoriteBorderIcon
          fontSize="large"onClick={(e) => setLiked(true)} />
        )}
        <p>100</p>
      </div>
      <div className="videoSidebar__button">
        <MessageIcon fontSize ='large' />
        <p>250</p>
      </div>  
      <div className="videoSidebar__button">
        <ShareIcon fontSize = 'large' />;
        <p>11</p>
      </div>


    </div>
  )
}

export default VideoSidebar