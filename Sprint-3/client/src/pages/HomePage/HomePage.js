import React, {Component} from 'react';
import './HomePage.scss';
import axios from 'axios';
import MainVideo from '../../components/MainVideo/MainVideo';
import SubHeading from '../../components/SubHeading/SubHeading';
import Form from '../../components/Form/Form';
import VideoList from '../../components/VideoList/VideoList';
import Comments from '../../components/Comments/Comments';



const URL = process.env.REACT_APP_API_URL;




class HomePage extends Component {


    state ={
      HeroHeading :{},
    NextVideo: []
    }

    componentDidMount(){
    
      axios
        .get(URL + '/videos')
      .then(results => {
        
        this.setState({NextVideo:results.data});
        
       
      })
      .then (() => {
        let videoId = '1af0jruup5gu';
        if(this.props.match.params.id){
          videoId = this.props.match.params.id;
        }
       
       
        axios 
          .get(`${URL}/videos/${videoId}`)
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
        axios.get(URL + '/videos/'+ videoId)
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
        
        
        <MainVideo HeroHeading={this.state.HeroHeading}/> 
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