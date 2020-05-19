import React from 'react';
import './VideoList.scss'

const VideoList = props => {
  console.log(props);
  const array = props.VideoList.map((video, index) => {
    return (
      <section className="video" key={video.id}>
        <img className="video__img" src={video.img} alt="video"></img>
        <div className="video-text">
          <span className="video-title">{video.title}</span>
          <span className="video-author">{video.channel}</span>
        </div>
      </section>
    )
  })
  return (<div>{array}</div>)
}


export default VideoList;