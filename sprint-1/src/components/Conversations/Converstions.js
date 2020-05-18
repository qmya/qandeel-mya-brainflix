import React from 'react';
import './Conversations.scss';

const Conversations = props => {   
  console.log(props);  
  const ConversationsList = props.ConversationsHistory.map((conversations,index) => {   
  return (
  <section className="comments-section" key={conversations.id}>
    <div className="comments-single">
      <img className="comments__avatar" src={conversations.userAvatar} alt="userAvatar"></img>
      <article className="comments__text">
        <div className="comments__text-header">
          <h5 className="comments__text-user">{conversations.name}</h5>  
          <span className="comments__text-date">{conversations.date}</span>
        </div>  
        <span className="comments__text-own">{conversations.comment}</span>
      </article>
    </div>
  </section>      
      )
})
   return (<div>{ConversationsList}</div>)
}



export default Conversations;