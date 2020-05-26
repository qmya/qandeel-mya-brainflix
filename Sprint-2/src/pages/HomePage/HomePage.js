import React, {Component} from 'react';
import './HomePage.scss';
import axios from 'axios';
import Header from '../../components/Header/Header';
import HeroVideo from '../../components/HeroVideo/HeroVideo';
import SubHeading from '../../components/SubHeading/SubHeading';
import Form from '../../components/Form/Form';
import VideoList from '../../components/VideoList/VideoList';
import Comments from '../../components/Comments/Comments';


//The url for the API 
const URL = 'https://project-2-api.herokuapp.com/';
//got API key and Store the key in a global variable in your website.
const KEY = '?api_key=2745b39a-d620-4945-ad03-64ebf22b4100';



class HomePage extends Component {


    state ={
      HeroHeading :{},
    NextVideo: []
    }

    componentDidMount(){
      axios.get(URL+'videos/'+KEY)
      .then(results => {
        
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
         
          this.setState({
           HeroHeading:results.data,
            
          })
         
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