import React from 'react';
 import './VideoList.scss'
 import { Link } from "react-router-dom";
 
const VideoList = props => {   
  console.log(props.NextVideo);  
  const NextVideo = props.NextVideo.map((NextVideo) => {   
  return (
  <section className="nextvideo" key={NextVideo.id}>
    {/* <h5 className="nextvideo__header">NEXT VIDEO</h5> */}
    <span className="nextvideo__wrapper">
      <img className="nextvideo__image" src={NextVideo.image} alt="next video images"/>
      <span className="nextvideo__heading">
         <h5 className="nextvideo__title">{NextVideo.title}</h5>  
          <span className="nextvideo__channel">{NextVideo.channel}</span>
        </span>  
       </span>
  </section>      
      )
    })
   return (
     <section className="nextvideo__container">
     <aside >
     <div><h5 className="nextvideo__nextheader">NEXT VIDEO</h5>
     {NextVideo}
     </div>
     </aside>
     </section>
   )
}



export default VideoList;


