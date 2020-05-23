import React, {Component} from 'react';
import './VideoDetail.scss'
import axios from 'axios';
import HeroVideo from '../HeroVideo/HeroVideo';
import SubHeading from '../SubHeading/SubHeading';
import Form from '../Form/Form';
import VideoList from '../VideoList/VideoList';
// import HeroHeading from '../HeroHeading/HeroHeading';
import Comments from '../Comments/Comments';
// import NextVideo from '../../NextVideo/NextVideo';
import commentList from '../VideoComment/VideoComment';

//The url for the API 
const URL = 'https://project-2-api.herokuapp.com/';

//got API key and Store the key in a global variable in your website.
const KEY = '?api_key=2745b39a-d620-4945-ad03-64ebf22b4100';

const Videos =["BMX Rampage: 2018 Highlights","Become A Travel Pro In One Easy Lesson", "Les Houches The Hidden Gem Of The Chamonix","Travel Health Useful Medical Information For","Cheap Airline Tickets Great Ways To Save","Take A Romantic Break In A Boutique Hotel","Choose the Perfect Accommodations","Cruising Destination Ideas","Train Travel On Track For Safety" ]

class VideoDetail extends Component {


    state ={
      HeroHeading :{},
      commentList: commentList,
      NextVideo: []
    }

    componentDidMount(){
      axios.get(URL+"videos"+KEY).then(results => {
      const filtered = results.data.filter(video => {
            if (Videos.includes(video.title)){
              switch(video.title){
                case "BMX Rampage: 2018 Highlights":
                  video.image = "https://i.imgur.com/l2Xfgpl.jpg"
                break;
                case "Become A Travel Pro In One Easy Lesson":
                  video.image = "https://i.imgur.com/5qyCZrD.jpg"
                break;
                case "Les Houches The Hidden Gem Of The Chamonix":
                  video.image = "https://i.imgur.com/yFS8EBr.jpg"
                break;
                case "Travel Health Useful Medical Information For":
                  video.image = "https://i.imgur.com/MMDMgD7.jpg"
                break;
                case "Cheap Airline Tickets Great Ways To Save":
                  video.image = "https://i.imgur.com/ibLw5q5.jpg"
                break;
                case "Take A Romantic Break In A Boutique Hotel":
                  video.image = "https://i.imgur.com/7rD6Mf6.jpg"
                break;
                case "Choose the Perfect Accommodations":
                  video.image = "https://i.imgur.com/0hi3N4B.jpg"
                break;
                case "Cruising Destination Ideas":
                  video.image = "https://i.imgur.com/DDJNZNw.jpg"
                break;
                case "Train Travel On Track For Safety":
                  video.image = "https://i.imgur.com/i6S8m7I.jpg"
                break;
                default:
                  video.image = "https://i.imgur.com/l2Xfgpl.jpg"
              }
              return video;
            }

          })
         this.setState({
          NextVideo: filtered,
          HeroHeading : filtered[0]

         })
      })
  }
    
    render() {
      return (
        <>
  
            <section>
              <HeroVideo HeroHeading={this.state.HeroHeading}/>
            {/* <HeroVideo VideoList={this.state.video}/>    */}
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