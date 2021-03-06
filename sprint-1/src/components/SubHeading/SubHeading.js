import React from 'react';

import "./SubHeading.scss"; 

import eye from '../../Assets/Icons/SVG/Icon-views.svg';
import heart from '../../Assets/Icons/SVG/Icon-likes.svg';


const SubHeading =(props) =>{
    console.log (props);
    // const HeroHeading = props.HeroHeading.map((HeroHeading) => {       
    return(
       <div className="subheading" key={props.HeroHeading.id}>
        <h1 className="subheading__bmx" >{props.HeroHeading.title}</h1>
        <div className="subheading__redwrapper">
             <div className="subheading__redcowicons">
               <div className="subheading__redcowdate">
              <h2 className="subheading__redcow">{props.HeroHeading.author}</h2>
              <p className="subheading__date">{props.HeroHeading.date}</p>
           </div>
           </div> 
        
        <div className="subheading__icons">
        <img className="subheading__eye" src={eye} alt="eye icon"/> 
        
            <p className="subheading__eyenumber">{props.HeroHeading.views}</p>
            <img className="subheading__heart" src={heart} alt="heart icon"/> 
            <p className="subheading__heartnumber">{props.HeroHeading.likes}</p>
        
        </div>
        </div>
        <p className="subheading__paragraph">{props.HeroHeading.description}</p>
        
        </div>
       


         
    );
  }

export default SubHeading;




