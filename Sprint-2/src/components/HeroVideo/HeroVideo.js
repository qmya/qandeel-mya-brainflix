import React from 'react';
// import MainVideo from '../../Assets/Images/video-list-0.jpg';
import PlayIcon from '../../Assets/Icons/SVG/Icon-play.svg';
import FullScreen from '../../Assets/Icons/SVG/Icon-fullscreen.svg';
import FullVolume from '../../Assets/Icons/SVG/Icon-volume.svg';

import "./HeroVideo.scss";

const HeroVideo =() =>{
    return(
        
        
        <div className ="herovideo">
          
         {/* <img className ="herovideo__video" src ={MainVideo} alt="main video of the site"/> */}
        <div className="herovideo__controller">
        <div className ="herovideo__wrap">
        <img className ="herovideo__playicon" src ={PlayIcon} alt="main video of the site"/> 
        </div>
        <div className ="herovideo__line"><div className ="herovideo__insideline"></div></div>
        <div className ="herovideo__righticons">
        <img className ="herovideo__fullscreen" src ={FullScreen} alt="main video of the site"/> 
        <img className ="herovideo__volume" src ={FullVolume} alt="main video of the site"/> 
        </div>
        
        </div>
        </div>
    
    );
}


export default HeroVideo;