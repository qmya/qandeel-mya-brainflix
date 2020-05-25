import React from 'react';
import './UploadPage.scss';
import upload from '../../Assets/Images/Upload-video-preview.jpg';
import Header from '../../components/Header/Header';

class UploadPage extends React.Component {
  render () {
    return (
      <div>
       <Header /> 
        <section className='upload'>
          <h1 className='upload__title'>Upload Video</h1>
          
            <section className='upload__desktop'>
              <div>
                <h3 className="upload__subtitle">VIDEO THUMBNAIL</h3> 
                <img src={upload} className="upload__image" alt=" " /> 
              </div>
              <div className="upload__formwrap">
                <form className="upload__form"> 
                  <div className="upload__subtitle">TITLE YOUR VIDEO</div> 
                    <input type="text" placeholder="Add a title to your video" className="upload__add"/>
                  <div className="upload__subtitle">ADD A VIDEO DESCRIPTION</div> 
                    <textarea type="text" placeholder="Add a description to your video" className="upload__description"></textarea>
                </form>
              </div>  
            </section>
          
          <div className="upload__buttons">
            <button className="upload__publish">PUBLISH</button>
            <div className="upload__cancel">CANCEL</div>
          </div>
        </section>
      </div>
    )
  }
}

export default UploadPage;