import React from 'react';
import Views from '../../assets/icons/svg/icon-views.svg';
import Likes from '../../assets/icons/svg/icon-likes.svg';
import './VideoTitle.scss';

function VideoTitle() {
    return (
        <section className='title-section'>
          <h1 className='title'>BMX Rampage: 2018 Highlights</h1>
          <article className='article'>
            <div className="author">
              <span className="author__video">By Red Cow</span>
              <span className="author__date">12/18/2018</span>
            </div>
  
            <div className="total">
              <span className='total-align'><img src={Views} alt="Total View" className='total-views'></img>1,001,023</span>
              <span className='total-align'><img src={Likes} alt="Total Likes" className='total-likes'></img>110,985</span>
            </div>
          </article>
  
          <div>
            <p className="description">
              On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
            </p>
          </div>
        </section>
      )
}


export default VideoTitle;