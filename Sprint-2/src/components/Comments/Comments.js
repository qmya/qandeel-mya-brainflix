import React from 'react';
import './Comments.scss';
import userAvatar from '../../Assets/Images/blank.jpg';

const Comments = props => {   
   

const format = (date) =>  {
  return new Date(date).toLocaleDateString()
}

  if (props.commentList) {
    return (
       <div>
         {
           props.commentList.map((commentList) => {   
             return (
             <section className="comments-section" key={commentList.id}>
               <div className="comment__wrap">
               
                 <article className="comment__namedate">
                 <img className="comment__image" src={userAvatar} alt="userAvatar"></img>
                   <div className="comment__header">
                     <h5 className="comment__name">{commentList.name}</h5>  
                     <span className="comment__date">{format(commentList.timestamp)}</span>
                   </div>  
                  
                 </article>
                 <span className="comment__commentwrap">
                 <span className="comment__comment">{commentList.comment}</span>
                 </span>
               </div>
             </section>      
                 )
               })
         }
      </div>
      )
  } else {
    return null;
  }
}



export default Comments;




 
