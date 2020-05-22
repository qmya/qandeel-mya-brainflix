import React from 'react';
import './Comments.scss';

const Comments = props => {   
  console.log(props);  
  const commentList = props.commentList.map((commentList) => {   
  return (
  <section className="comment__section" key={commentList.id}>
    <div className="comment__wrap">
    
      <article className="comment__namedate">
      <img className="comment__image" src={commentList.userAvatar} alt="userAvatar"></img>
        <div className="comment__header">
          <h5 className="comment__name">{commentList.name}</h5>  
          <span className="comment__date">{commentList.date}</span>
        </div>  
       
      </article>
      <span className="comment__commentwrap">
      <span className="comment__comment">{commentList.comment}</span>
      </span>
    </div>
  </section>      
      )
    })
   return (<div>{commentList}</div>)
}



export default Comments;




 
