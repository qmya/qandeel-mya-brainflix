import React, {Component} from 'react';
// import './VideoDetail.scss'
import axios from 'axios';
// import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from '../components/Header/Header';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import SubHeading from '../components/SubHeading/SubHeading';
import Form from '../components/Form/Form';
import VideoList from '../components/VideoList/VideoList';
// import HeroHeading from '../components/HeroHeading/HeroHeading';
import Comments from '../components/Comments/Comments';
// import NextVideo from '../../components/NextVideo/NextVideo';
// import commentList from '../components/VideoComment/VideoComment';

//The url for the API 
const URL = 'https://project-2-api.herokuapp.com/';
//got API key and Store the key in a global variable in your website.
const KEY = '?api_key=2745b39a-d620-4945-ad03-64ebf22b4100';

//Number of milliseconds into day time
const Datetime = (date) => {
  return new Date(date).toLocaleDateString()
}



// const id: 1af0jruup5gu;
// const currentVideo = id => `URL+videos/id+KEY}`
// console.log(currentVideo);

// const Videos =["BMX Rampage: 2018 Highlights","Become A Travel Pro In One Easy Lesson", "Les Houches The Hidden Gem Of The Chamonix","Travel Health Useful Medical Information For","Cheap Airline Tickets Great Ways To Save","Take A Romantic Break In A Boutique Hotel","Choose the Perfect Accommodations","Cruising Destination Ideas","Train Travel On Track For Safety" ]

class HomePage extends Component {


    state ={
      HeroHeading :{},
       videoId:'',
      VideoLikesViews: [],
      commentList:[],
    
      NextVideo: []
    }

    componentDidMount(){
      axios.get(URL+'videos/'+KEY)
      .then(results => {
        console.log(results) 
        this.setState({videoId:results.data[0].id});
        this.setState({NextVideo:results.data});
        
       
      })
      .then (() => {
        axios 
        .get(URL + 'videos/' + (this.state.videoId) + KEY)
        .then(results => {
          console.log(results.data)
          console.log(results.data.image)
          this.setState({
           HeroHeading:results.data.image,
           HeroHeading:results.data.title,
           HeroHeading:results.data.description,
           commentList:results.data.comments,
            
          })
         console.log(results.data.image)
        })
      })
    }

    render() {
      return (
        <>
        <Header/>
        <HeroVideo HeroHeading={this.state.HeroHeading}/> 
        <SubHeading HeroHeading={this.state.HeroHeading}/> 
        <Form/>  
        
        <Comments commentList={this.state.commentList}/> 
          <VideoList NextVideo={this.state.NextVideo} /> 
        </>
      )
    }
   
    

    // componentDidMount(){
    //   axios.get(URL+"videos"+KEY).then(results => {
      // const filtered = results.data.filter(video => {
            // if (Videos.includes(video.title)){
            //   switch(video.title){
            //     case "BMX Rampage: 2018 Highlights":
            //       video.image = "https://i.imgur.com/l2Xfgpl.jpg"
            //     break;
            //     case "Become A Travel Pro In One Easy Lesson":
            //       video.image = "https://i.imgur.com/5qyCZrD.jpg"
            //     break;
            //     case "Les Houches The Hidden Gem Of The Chamonix":
            //       video.image = "https://i.imgur.com/yFS8EBr.jpg"
            //     break;
            //     case "Travel Health Useful Medical Information For":
            //       video.image = "https://i.imgur.com/MMDMgD7.jpg"
            //     break;
            //     case "Cheap Airline Tickets Great Ways To Save":
            //       video.image = "https://i.imgur.com/ibLw5q5.jpg"
            //     break;
            //     case "Take A Romantic Break In A Boutique Hotel":
            //       video.image = "https://i.imgur.com/7rD6Mf6.jpg"
            //     break;
            //     case "Choose the Perfect Accommodations":
            //       video.image = "https://i.imgur.com/0hi3N4B.jpg"
            //     break;
            //     case "Cruising Destination Ideas":
            //       video.image = "https://i.imgur.com/DDJNZNw.jpg"
            //     break;
            //     case "Train Travel On Track For Safety":
            //       video.image = "https://i.imgur.com/i6S8m7I.jpg"
            //     break;
            //     default:
            //       video.image = "https://i.imgur.com/l2Xfgpl.jpg"
              // }
              // return video;
            // }

          // })
        //  this.setState({
        //   NextVideo: filtered,
        //   HeroHeading : filtered[0]

        //  })
  //     })
  // }
    
  //   render() {
  //     return (
  //       <>
        

               
          //  <HeroVideo HeroHeading={this.state.video}/>    
  //           <div className="HomePage__container">
  //             <div className="HomePage__wrap">
  //           <SubHeading HeroHeading={this.state.HeroHeading}/> 
            
  //           <Form/>
  //           <Comments commentList={this.state.commentList}/> 
  //           </div>
           
  //           <VideoList NextVideo={this.state.NextVideo} /> 
             
  //             </div>

        
  //      </ >
  //       );
  //   }
  }
  
  export default HomePage;