import React from 'react';

import HeroVideo from '../HeroVideo/HeroVideo';
import SubHeading from '../SubHeading/SubHeading';
import Form from '../Form/Form';
import VideoList from '../VideoList/VideoList';
import HeroHeading from '../HeroVideo/HeroVideo';
import Comments from '../Comments/Comments';
import NextVideo from '../../NextVideo/NextVideo';
import commentList from '../VideoComment/VideoComment';

class VideoDetail extends React.Component{

    // state = {
    //   // mainVideo: mainVideo[0],
    //   VideoList: video[0],
    //   commentList:commentList,
    // }
    // render() {
    //     // let filtered = this.state.videos.filter(video => {return video.title !== this.state.mainVideo.title})
    //     // let filtered = this.state.video.filter(video => {return video.title !== this.state.video.title});

    //   return (
    //     <>
    //     <HeroVideo VideoList={this.state.video}/>           
    //        <SubHeading />       
    //         {/* <Form/> */}

    //           <Comments commentList={this.state.commentList}/> 
              
             
    //            {/* <aside>
    //             <VideoList VideoList={this.state.VideoLists}/>
    //           </aside> */}
               
    //   </>
    //   );

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
            <VideoList NextVideo={this.state.NextVideo} /> 
            </section> 
           

        </ >
        );
    }
  }
  
  export default VideoDetail;