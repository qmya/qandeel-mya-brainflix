import React from 'react';
import './VideoDetail.scss'
import HeroVideo from '../HeroVideo/HeroVideo';
import SubHeading from '../SubHeading/SubHeading';
import Form from '../Form/Form';
import VideoList from '../VideoList/VideoList';
import HeroHeading from '../HeroHeading/HeroHeading';
import Comments from '../Comments/Comments';
import NextVideo from '../../NextVideo/NextVideo';
import commentList from '../VideoComment/VideoComment';



class VideoDetail extends React.Component{


    state ={
      HeroHeading :HeroHeading,
      commentList: commentList,
      NextVideo: NextVideo
    }
    render() {
      return (
        <>
  
            <section>
            <HeroVideo VideoList={this.state.video}/>   
            <div className="videodetail__container">
              <div className="videodetail__wrap">
            <SubHeading HeroHeading={this.state.HeroHeading}/> 
            
            <Form/>
            <Comments commentList={this.state.commentList}/> 
            </div>
           
            <VideoList NextVideo={this.state.NextVideo} /> 
             
              </div>
              </section> 
           

        </ >
        );
    }
  }
  
  export default VideoDetail;