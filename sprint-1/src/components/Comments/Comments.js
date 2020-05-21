import React from 'react';
import './Comments.scss';

const Comments = props => {   
  console.log(props);  
  const commentList = props.commentList.map((commentList) => {   
  return (
  <section className="comments-section" key={commentList.id}>
    <div className="comment-single">
      <img className="comment__avatar" src={commentList.userAvatar} alt="userAvatar"></img>
      <article className="comment__text">
        <div className="comment__text-header">
          <h5 className="comment__text-user">{commentList.name}</h5>  
          <span className="comment__text-date">{commentList.date}</span>
        </div>  
        <span className="comment__text-own">{commentList.comment}</span>
      </article>
    </div>
  </section>      
      )
    })
   return (<div>{commentList}</div>)
}



export default Comments;




 
