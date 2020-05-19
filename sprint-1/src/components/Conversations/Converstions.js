import React from 'react';
import './Conversations.scss';

const Conversations = props => {   
  console.log(props);  
  const ConversationsList = props.ConversationsHistory.map((conversations,index) => {   
  return (
  <section className="comments-section" key={conversations.id}>
    <div className="comments-single">
      <img className="comments-avatar" src={conversations.userAvatar} alt="userAvatar"></img>
      <article className="comments-text">
        <div className="comments-header">
          <h5 className="comments-user">{conversations.name}</h5>  
          <span className="comments-date">{conversations.date}</span>
        </div>  
        <span className="comments-paragraph">{conversations.comment}</span>
      </article>
    </div>
  </section>      
      )
})
   return (<div>{ConversationsList}</div>)
}



export default Conversations;