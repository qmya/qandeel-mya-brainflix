import React, {Component} from 'react';
import './HomePage.scss';
import axios from 'axios';
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
// const Datetime = (date) => {
//   return new Date(date).toLocaleDateString()
// }

class HomePage extends Component {


    state ={
      HeroHeading :{},
    NextVideo: []
    }

    componentDidMount(){
      axios.get(URL+'videos/'+KEY)
      .then(results => {
        console.log(results) 
        // this.setState({videoId:results.data[0].id});
        this.setState({NextVideo:results.data});
        
       
      })
      .then (() => {
        let videoId = '1af0jruup5gu';
        if(this.props.match.params.id){
          videoId = this.props.match.params.id;
        }
        axios 
        .get(URL + 'videos/' +videoId + KEY)
        .then(results => {
          console.log(results.data)
          console.log(results.data.image)
          this.setState({
           HeroHeading:results.data,
            
          })
         console.log(results.data.image)
        })
      })
    }


    componentDidUpdate(prevProps){
      if (prevProps.match.params.id !== this.props.match.params.id) {
        let videoId = '1af0jruup5gu';
        if(this.props.match.params.id){
          videoId = this.props.match.params.id;
        }
        axios.get(URL + 'videos/'+ videoId +KEY)
       .then(results =>{
         this.setState({
           HeroHeading:results.data,
         })
       }

       )
    }

  }

    render() {
      let filtered =this.state.NextVideo.filter(video =>{
        return video.id !== this.state.HeroHeading.id;
      })
      return (
        <>
        <Header/>
        
        <HeroVideo HeroHeading={this.state.HeroHeading}/> 
        <div className="HomePage__container">
     <div className="HomePage__wrap">
        <SubHeading HeroHeading={this.state.HeroHeading}/> 
        <Form/>  
        
        <Comments commentList={this.state.HeroHeading.comments}/> 
        </div>
          <VideoList NextVideo={filtered}
           /> 
           </div>
        </>
      )
    }
  }
   export default HomePage;