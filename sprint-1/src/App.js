import React from 'react';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import VideoTitle from './components/VideoTitle/VideoTitle';
import ConversationInput from './components/ConversationInput/ConversationInput'
import Comments from './components/Conversations/Converstions'
import ConversationsHistory from './ConversationList.js';
import videoList from './VideoListArray';
import VideoList from './components/Videolist/VideoList';
import './styles/App.scss';

class App extends React.Component {
  state ={
    ConversationsHistory: ConversationsHistory,
    VideoList: videoList
  }
  render() {
    return (
      <>
        <section>
           <Header />        {/* contains logo + search box + upload button + avatar */}
           <MainVideo />    {/* Hero video, playing current/selected video */}
        </section>
      <section className='laptop-style'>
          <section>
          <VideoTitle /> {/* Hero Video Title, Views and Likes */}
           <ConversationInput />   {/* textArea for user input */}
          <Comments ConversationsHistory={this.state.ConversationsHistory}/> {/* output containg users comments */}
          </section> 
         <aside className='aside'>
          <h1 className='next-video'>NEXT VIDEO</h1>
          <VideoList VideoList={this.state.VideoList} /> {/* list of videos avilable to be played */}
        </aside>
      </section>
      </ >
      );
  }
}
  

export default App;
