import React from 'react';
 import './VideoList.scss'

 
const VideoList = props => {   
  console.log(props);  
  const NextVideo = props.NextVideo.map((NextVideo) => {   
  return (
  <section className="nextvideo" key={NextVideo.id}>
    {/* <h5 className="nextvideo__header">NEXT VIDEO</h5> */}
    <span className="nextvideo__wrapper">
      <img className="nextvideo__image" src={NextVideo.img} alt="next video images"></img>
      <span className="nextvideo__heading2">
         <h5 className="nextvideo__heading">{NextVideo.title}</h5>  
          <span className="nextvideo__heading">{NextVideo.channel}</span>
        </span>  
       </span>
  </section>      
      )
    })
   return (<span>{NextVideo}</span>)
}



export default VideoList;


 