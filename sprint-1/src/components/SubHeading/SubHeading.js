import React from 'react';

import "./SubHeading.scss"; 
import HeroHeading from '../HeroHeading/HeroHeading';
import eye from '../../Assets/Icons/SVG/Icon-views.svg';
import heart from '../../Assets/Icons/SVG/Icon-likes.svg';


const SubHeading =(props) =>{
    console.log (props);
    return(
       <div className="subheading" key={HeroHeading.id}>
        <h1 className="subheading__bmx" >{HeroHeading.title}</h1>
        <div className="subheading__redcowicons">
        <div className="subheading__redcowdate">
        <h2 className="subheading__redcow">{HeroHeading.author}</h2>
    <p className="subheading__date">{HeroHeading.date}</p>
        </div>
        </div> 
        <div className="subheading__icons">
        <img className="comment__eye" src={eye} alt="eye icon"/> 
        
            <p className="subheading__paragraph">{HeroHeading.views}</p>
            <img className="comment__eye" src={heart} alt="heart icon"/> 
            <p className="subheading__paragraph">{HeroHeading.likes}</p>
        
        </div>
        <p>{HeroHeading.description}</p>
        
        </div>
       


         
    );
}


export default SubHeading;




// const SubHeading = props => {   
//     console.log(props);  
//     const HeroHeading = props.HeroHeading.map((HeroHeading) => {  
//     return (
//     <section className="comments-section" key={HeroHeading.id}>
//       <div className="comment-single">
        {/* <img className="comment__avatar" src={HeroHeading.userAvatar} alt="userAvatar"></img> */}
        {/* <article className="comment__text">
          <div className="comment__text-header">
            <h5 className="comment__text-user">{HeroHeading.title}</h5>  
            <h5 className="comment__text-user">{HeroHeading.author}</h5> 
            <span className="comment__text-date">{HeroHeading.date}</span>
          </div>  
          <span className="comment__text-own">{HeroHeading.description}</span>
          <span className="comment__text-own">{HeroHeading.views}</span>
          <span className="comment__text-own">{HeroHeading.likes}</span>
        </article>
      </div>
    </section>      
        )
      
    
  })
  return (<div>{HeroHeading}</div>)
}

  
  
  
  export default SubHeading; */}