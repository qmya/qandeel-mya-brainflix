import React from 'react';

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
            <SubHeading HeroHeading={this.state.HeroHeading}/> 
            
            <Form/>
            <Comments commentList={this.state.commentList}/> 
            
            <aside className="nextvideo__container">
            {/* <h5 className="nextvideo__header">NEXT VIDEO</h5> */}
              <VideoList NextVideo={this.state.NextVideo} /> 
              </aside>
            </section> 
           

        </ >
        );
    }
  }
  
  export default VideoDetail;