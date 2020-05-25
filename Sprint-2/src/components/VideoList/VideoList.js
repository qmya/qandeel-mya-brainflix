import React from 'react';
 import './VideoList.scss'
 import { Link } from "react-router-dom";
 
const VideoList = props => {   
  console.log(props.NextVideo);  
  const NextVideo = props.NextVideo.map((NextVideo) => {   
  return (
    <Link to={'/'+ NextVideo.id}>
  <section className="nextvideo" key={NextVideo.id}>
    <span className="nextvideo__wrapper">
      <img className="nextvideo__image" src={NextVideo.image} alt="next video images"/>
      <span className="nextvideo__heading">
         <h5 className="nextvideo__title">{NextVideo.title}</h5>  
          <span className="nextvideo__channel">{NextVideo.channel}</span>
        </span>  
       </span>
  </section> 
  </Link>     
      )
    })
   return (
     <section className="nextvideo__container">
     <div>
     <h5 className="nextvideo__nextheader">NEXT VIDEO</h5>
     {NextVideo}
     </div>
     </section>
   )
}

export default VideoList;















